import React from 'react';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext'; // เปลี่ยนเป็น import default

const Dashboard = () => {
  const { t } = useTranslation();
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <h1>{t('dashboard')}</h1>
      <p>{t('welcomeUser', { username: user?.username || 'User' })}</p>
      <button onClick={logout} className="logout-btn">
        {t('logout')}
      </button>
    </div>
  );
};

export default Dashboard;