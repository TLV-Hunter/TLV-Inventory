const mongoose = require('mongoose');

const quotationSchema = new mongoose.Schema({
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
  items: [{ productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, price: Number }],
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Quotation', quotationSchema);