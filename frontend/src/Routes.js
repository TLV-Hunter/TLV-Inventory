import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext'; // เปลี่ยนเป็น AuthContext
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Warehouse from './pages/Warehouse';
import PurchaseOrders from './pages/PurchaseOrders';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import UserManagement from './pages/UserManagement';
import DocumentManagement from './pages/DocumentManagement';
import Logistics from './pages/Logistics';
import Collaboration from './pages/Collaboration';
import Profile from './pages/Profile';

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext); // ใช้ AuthContext

  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/inventory" element={isAuthenticated ? <Inventory /> : <Navigate to="/login" />} />
      <Route path="/warehouse" element={isAuthenticated ? <Warehouse /> : <Navigate to="/login" />} />
      <Route path="/purchase-orders" element={isAuthenticated ? <PurchaseOrders /> : <Navigate to="/login" />} />
      <Route path="/reports" element={isAuthenticated ? <Reports /> : <Navigate to="/login" />} />
      <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/login" />} />
      <Route path="/users" element={isAuthenticated ? <UserManagement /> : <Navigate to="/login" />} />
      <Route path="/documents" element={isAuthenticated ? <DocumentManagement /> : <Navigate to="/login" />} />
      <Route path="/logistics" element={isAuthenticated ? <Logistics /> : <Navigate to="/login" />} />
      <Route path="/collaboration" element={isAuthenticated ? <Collaboration /> : <Navigate to="/login" />} />
      <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
    </Routes>
  );
};

export default AppRoutes;