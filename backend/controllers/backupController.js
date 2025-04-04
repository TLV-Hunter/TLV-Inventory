const Backup = require('../models/Backup');

exports.createBackup = async (req, res) => {
  const { data, type } = req.body;
  try {
    const backup = new Backup({ data, type, createdBy: req.user._id });
    await backup.save();
    res.status(201).json(backup);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getBackups = async (req, res) => {
  try {
    const backups = await Backup.find().populate('createdBy');
    res.json(backups);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};