const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, purchaseController.createPurchaseOrder);
router.get('/', authMiddleware, purchaseController.getPurchaseOrders);
router.put('/:id', authMiddleware, purchaseController.updatePurchaseOrder);
router.delete('/:id', authMiddleware, purchaseController.deletePurchaseOrder);

module.exports = router;