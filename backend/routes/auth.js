const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const mfaMiddleware = require('../middleware/mfaMiddleware');

router.post('/login', async (req, res) => {
  const { username, password, otp } = req.body;

  // ตรวจสอบว่ากรอกข้อมูลครบหรือไม่
  if (!username || !password) {
    return res.status(400).json({
      message: 'Missing required fields',
      errors: {
        username: !username ? 'Username is required' : undefined,
        password: !password ? 'Password is required' : undefined,
      },
    });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username' });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    req.user = user;
    mfaMiddleware(req, res, () => {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      res.json({ token, user: { id: user._id, username: user.username, role: user.role } });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.get('/me', authMiddleware, (req, res) => {
  res.json(req.user);
});

router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  // ตรวจสอบว่ากรอกข้อมูลครบหรือไม่
  if (!username || !password) {
    return res.status(400).json({
      message: 'Missing required fields',
      errors: {
        username: !username ? 'Username is required' : undefined,
        password: !password ? 'Password is required' : undefined,
      },
    });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const validRoles = ['user', 'admin'];
    if (role && !validRoles.includes(role)) {
      return res.status(400).json({ message: `Invalid role. Must be one of: ${validRoles.join(', ')}` });
    }

    const user = new User({
      username,
      password,
      role: role || 'user',
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({
      token,
      user: { id: user._id, username: user.username, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;