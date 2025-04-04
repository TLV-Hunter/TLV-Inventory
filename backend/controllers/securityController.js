const AuditTrail = require('../models/AuditTrail');

exports.getAuditTrails = async (req, res) => {
  try {
    const auditTrails = await AuditTrail.find().populate('userId');
    res.json(auditTrails);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};