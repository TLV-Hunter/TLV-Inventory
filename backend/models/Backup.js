const mongoose = require('mongoose');

const backupSchema = new mongoose.Schema({
  data: { type: Object, required: true },
  type: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Backup', backupSchema);