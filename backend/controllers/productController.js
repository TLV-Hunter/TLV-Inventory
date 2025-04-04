const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, description, category, price, stock } = req.body;

  // ตรวจสอบว่ากรอกข้อมูลครบหรือไม่
  if (!name || !price) {
    return res.status(400).json({
      message: 'Missing required fields',
      errors: {
        name: !name ? 'Product name is required' : undefined,
        price: !price ? 'Price is required' : undefined,
      },
    });
  }

  // ตรวจสอบว่า price เป็นตัวเลขและมากกว่า 0
  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ message: 'Price must be a positive number' });
  }

  // ตรวจสอบ stock ถ้ามี
  if (stock !== undefined && (typeof stock !== 'number' || stock < 0)) {
    return res.status(400).json({ message: 'Stock must be a non-negative number' });
  }

  try {
    const product = new Product({ name, description, category, price, stock: stock || 0 });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, category, price, stock } = req.body;

  // ตรวจสอบข้อมูลที่ส่งมา
  if (name && !name.trim()) {
    return res.status(400).json({ message: 'Product name cannot be empty' });
  }
  if (price !== undefined && (typeof price !== 'number' || price <= 0)) {
    return res.status(400).json({ message: 'Price must be a positive number' });
  }
  if (stock !== undefined && (typeof stock !== 'number' || stock < 0)) {
    return res.status(400).json({ message: 'Stock must be a non-negative number' });
  }

  try {
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};