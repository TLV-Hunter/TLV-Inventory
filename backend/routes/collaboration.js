const express = require('express');
const router = express.Router();
const collaborationController = require('../controllers/collaborationController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/chat', authMiddleware, collaborationController.createChat);
router.get('/chat', authMiddleware, collaborationController.getChats);

module.exports = router;