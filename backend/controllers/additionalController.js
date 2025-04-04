const Feedback = require('../models/Feedback');

exports.createFeedback = async (req, res) => {
  const { message, rating } = req.body;
  try {
    const feedback = new Feedback({ message, rating, userId: req.user._id });
    await feedback.save();
    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate('userId');
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};