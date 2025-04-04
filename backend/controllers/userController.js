const User = require('../models/User');
const { hashPassword } = require('../config/encryption');

exports.createUser = async (req, res) => {
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

    const hashedPassword = await hashPassword(password);
    const user = new User({ username, password: hashedPassword, role: role || 'user' });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};