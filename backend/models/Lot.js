const mongoose = require('mongoose');

const lotSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  lotNumber: { type: String, required: true },
  quantity: { type: Number, required: true },
  expiryDate: { type: Date },
});

module.exports = mongoose.model('Lot', lotSchema);