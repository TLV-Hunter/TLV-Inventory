const AuditTrail = require('../models/AuditTrail');

const auditMiddleware = async (req, res, next) => {
  const originalJson = res.json;
  res.json = function (body) {
    const audit = new AuditTrail({
      userId: req.user?._id,
      action: req.method,
      endpoint: req.originalUrl,
      status: res.statusCode,
      timestamp: new Date(),
    });
    audit.save();
    return originalJson.call(this, body);
  };
  next();
};

module.exports = auditMiddleware;