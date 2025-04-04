const express = require('express');
const jwt = require('jsonwebtoken'); // Added missing import
const Product = require('../models/Product');

const router = express.Router();

// Middleware to check if user is authenticated and authorized
const authMiddleware = (roles) => (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    if (roles && !roles.includes(decoded.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  } catch (err) {
    console.error('Token verification error:', err);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// Get all products
router.get('/', authMiddleware(['admin', 'staff', 'viewer']), async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a new product
router.post('/', authMiddleware(['admin', 'staff']), async (req, res) => {
  const { name, category, quantity, price } = req.body;

  // Basic validation
  if (!name || !category || quantity == null || price == null) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const product = new Product({ name, category, quantity, price });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a product
router.put('/:id', authMiddleware(['admin', 'staff']), async (req, res) => {
  const { name, category, quantity, price } = req.body;

  // Basic validation
  if (!name || !category || quantity == null || price == null) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, category, quantity, price },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a product
router.delete('/:id', authMiddleware(['admin']), async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;