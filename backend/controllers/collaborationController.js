const Chat = require('../models/Chat');

exports.createChat = async (req, res) => {
  const { message, recipient } = req.body;
  try {
    const chat = new Chat({ message, sender: req.user._id, recipient });
    await chat.save();
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getChats = async (req, res) => {
  try {
    const chats = await Chat.find({ $or: [{ sender: req.user._id }, { recipient: req.user._id }] })
      .populate('sender recipient');
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};