const mongoose = require('mongoose');

const logisticsSchema = new mongoose.Schema({
  route: { type: String, required: true },
  status: { type: String, required: true },
  vehicle: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Logistics', logisticsSchema);