const Report = require('../models/Report');

exports.createReport = async (req, res) => {
  const { title, type, data } = req.body;
  try {
    const report = new Report({ title, type, data, createdBy: req.user._id });
    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find().populate('createdBy');
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteReport = async (req, res) => {
  const { id } = req.params;
  try {
    const report = await Report.findByIdAndDelete(id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.status(200).json({ message: 'Report deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};