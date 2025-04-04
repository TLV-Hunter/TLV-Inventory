const Warehouse = require('../models/Warehouse');

exports.createWarehouse = async (req, res) => {
  const { name, location, capacity } = req.body;
  try {
    const warehouse = new Warehouse({ name, location, capacity });
    await warehouse.save();
    res.status(201).json(warehouse);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.find();
    res.json(warehouses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateWarehouse = async (req, res) => {
  const { id } = req.params;
  try {
    const warehouse = await Warehouse.findByIdAndUpdate(id, req.body, { new: true });
    if (!warehouse) {
      return res.status(404).json({ message: 'Warehouse not found' });
    }
    res.json(warehouse);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteWarehouse = async (req, res) => {
  const { id } = req.params;
  try {
    const warehouse = await Warehouse.findByIdAndDelete(id);
    if (!warehouse) {
      return res.status(404).json({ message: 'Warehouse not found' });
    }
    res.status(200).json({ message: 'Warehouse deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};