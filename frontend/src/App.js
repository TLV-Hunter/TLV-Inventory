import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { NotificationProvider } from './contexts/NotificationContext';
import Notification from './components/Notification/Notification'; // ปรับ path ให้ตรงกับโครงสร้าง
import './styles/themes.css';
import './styles/global.css';

function App() {
  return (
    <NotificationProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <Notification />
    </NotificationProvider>
  );
}

export default App;