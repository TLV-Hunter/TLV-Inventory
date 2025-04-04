const PurchaseOrder = require('../models/PurchaseOrder');

exports.createPurchaseOrder = async (req, res) => {
  const { supplier, items, totalAmount } = req.body;
  try {
    const purchaseOrder = new PurchaseOrder({ supplier, items, totalAmount, createdBy: req.user._id });
    await purchaseOrder.save();
    res.status(201).json(purchaseOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getPurchaseOrders = async (req, res) => {
  try {
    const purchaseOrders = await PurchaseOrder.find().populate('supplier createdBy');
    res.json(purchaseOrders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updatePurchaseOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const purchaseOrder = await PurchaseOrder.findByIdAndUpdate(id, req.body, { new: true });
    if (!purchaseOrder) {
      return res.status(404).json({ message: 'Purchase order not found' });
    }
    res.json(purchaseOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deletePurchaseOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const purchaseOrder = await PurchaseOrder.findByIdAndDelete(id);
    if (!purchaseOrder) {
      return res.status(404).json({ message: 'Purchase order not found' });
    }
    res.status(200).json({ message: 'Purchase order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};