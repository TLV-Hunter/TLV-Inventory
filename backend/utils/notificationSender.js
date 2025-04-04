const Notification = require('../models/Notification');

const sendNotification = async (userId, message, type) => {
  try {
    const notification = new Notification({ userId, message, type });
    await notification.save();
    return notification;
  } catch (error) {
    throw new Error('Notification sending failed');
  }
};

module.exports = { sendNotification };