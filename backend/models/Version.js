const mongoose = require('mongoose');

const versionSchema = new mongoose.Schema({
  version: { type: String, required: true },
  changes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Version', versionSchema);