const mongoose = require('mongoose');

const fleetSchema = new mongoose.Schema({
  vehicleId: { type: String, required: true },
  status: { type: String, required: true },
  lastMaintenance: { type: Date },
});

module.exports = mongoose.model('Fleet', fleetSchema);