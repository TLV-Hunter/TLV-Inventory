const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouseController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, warehouseController.createWarehouse);
router.get('/', authMiddleware, warehouseController.getWarehouses);
router.put('/:id', authMiddleware, warehouseController.updateWarehouse);
router.delete('/:id', authMiddleware, warehouseController.deleteWarehouse);

module.exports = router;