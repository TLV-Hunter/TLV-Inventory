const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, documentController.createDocument);
router.get('/', authMiddleware, documentController.getDocuments);
router.delete('/:id', authMiddleware, documentController.deleteDocument);

module.exports = router;