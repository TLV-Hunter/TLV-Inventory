const Logistics = require('../models/Logistics');

exports.createLogistics = async (req, res) => {
  const { route, status, vehicle } = req.body;
  try {
    const logistics = new Logistics({ route, status, vehicle, createdBy: req.user._id });
    await logistics.save();
    res.status(201).json(logistics);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getLogistics = async (req, res) => {
  try {
    const logistics = await Logistics.find().populate('createdBy');
    res.json(logistics);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};