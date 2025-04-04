const express = require('express');
const router = express.Router();
const securityController = require('../controllers/securityController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.get('/audit', authMiddleware, roleMiddleware(['admin']), securityController.getAuditTrails);

module.exports = router;