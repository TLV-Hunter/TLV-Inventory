const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('Device', deviceSchema);