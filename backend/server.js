const express = require('express');
const connectDB = require('./config/db');
const errorMiddleware = require('./middleware/errorMiddleware');
const auditMiddleware = require('./middleware/auditMiddleware');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(auditMiddleware);

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/user'));
app.use('/api/products', require('./routes/product'));
app.use('/api/warehouses', require('./routes/warehouse'));
app.use('/api/purchases', require('./routes/purchase'));
app.use('/api/reports', require('./routes/report'));
app.use('/api/notifications', require('./routes/notification'));
app.use('/api/documents', require('./routes/document'));
app.use('/api/security', require('./routes/security'));
app.use('/api/logistics', require('./routes/logistics'));
app.use('/api/collaboration', require('./routes/collaboration'));
app.use('/api/backups', require('./routes/backup'));
app.use('/api/additional', require('./routes/additional'));

// Error Middleware
app.use(errorMiddleware);

// Setup Admin User
const setupAdmin = async () => {
  const adminExists = await User.findOne({ username: 'admin' });
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash('password123', 10);
    const admin = new User({
      username: 'admin',
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'admin',
    });
    await admin.save();
    console.log('Admin user created');
  }
};

// Start Server
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  await connectDB();
  await setupAdmin();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();