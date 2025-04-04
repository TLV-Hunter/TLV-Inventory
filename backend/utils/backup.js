const Backup = require('../models/Backup');

const createBackup = async (data, type, userId) => {
  try {
    const backup = new Backup({ data, type, createdBy: userId });
    await backup.save();
    return backup;
  } catch (error) {
    throw new Error('Backup creation failed');
  }
};

module.exports = { createBackup };