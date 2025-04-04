const Document = require('../models/Document');

exports.createDocument = async (req, res) => {
  const { title, fileUrl, metadata } = req.body;
  try {
    const document = new Document({ title, fileUrl, metadata, createdBy: req.user._id });
    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getDocuments = async (req, res) => {
  try {
    const documents = await Document.find().populate('createdBy');
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteDocument = async (req, res) => {
  const { id } = req.params;
  try {
    const document = await Document.findByIdAndDelete(id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};