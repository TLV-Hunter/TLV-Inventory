const mfaMiddleware = (req, res, next) => {
  // ปิดการใช้งาน MFA ชั่วคราว
  next();
};

module.exports = mfaMiddleware;