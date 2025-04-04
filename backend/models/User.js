const mongoose = require('mongoose');
const { hashPassword, comparePassword } = require('../config/encryption');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  // ลบ email ออก
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hashPassword(this.password);
  }
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return await comparePassword(password, this.password);
};

module.exports = mongoose.model('User', userSchema);