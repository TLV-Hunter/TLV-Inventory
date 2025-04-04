const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  warehouseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse', required: true },
  name: { type: String, required: true },
  coordinates: { type: String },
});

module.exports = mongoose.model('Location', locationSchema);