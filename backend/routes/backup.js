const express = require('express');
const router = express.Router();
const backupController = require('../controllers/backupController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.post('/', authMiddleware, roleMiddleware(['admin']), backupController.createBackup);
router.get('/', authMiddleware, roleMiddleware(['admin']), backupController.getBackups);

module.exports = router;