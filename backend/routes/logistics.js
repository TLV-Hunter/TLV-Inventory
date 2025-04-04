const express = require('express');
const router = express.Router();
const logisticsController = require('../controllers/logisticsController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, logisticsController.createLogistics);
router.get('/', authMiddleware, logisticsController.getLogistics);

module.exports = router;