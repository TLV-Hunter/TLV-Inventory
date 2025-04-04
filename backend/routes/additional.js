const express = require('express');
const router = express.Router();
const additionalController = require('../controllers/additionalController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/feedback', authMiddleware, additionalController.createFeedback);
router.get('/feedback', authMiddleware, additionalController.getFeedbacks);

module.exports = router;