import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AppContext from '../contexts/AppContext';
import AuthContext from '../contexts/AuthContext';
import NotificationContext from '../contexts/NotificationContext';
import '../styles/login.css';

const Login = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme, toggleLanguage } = useContext(AppContext);
  const { login } = useContext(AuthContext);
  const { showNotification } = useContext(NotificationContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // รีเซ็ตข้อความ error ก่อน

    // ตรวจสอบว่ากรอกครบหรือไม่
    if (!username && !password) {
      setError(t('missingBoth'));
      showNotification(t('missingBoth'), 'error');
      return;
    }
    if (!username) {
      setError(t('missingUsername'));
      showNotification(t('missingUsername'), 'error');
      return;
    }
    if (!password) {
      setError(t('missingPassword'));
      showNotification(t('missingPassword'), 'error');
      return;
    }

    // ตรวจสอบความถูกต้องของ Username และ Password
    const correctUsername = 'admin';
    const correctPassword = 'password123';
    const isUsernameCorrect = username === correctUsername;
    const isPasswordCorrect = password === correctPassword;

    if (!isUsernameCorrect && !isPasswordCorrect) {
      setError(t('invalidBoth'));
      showNotification(t('invalidBoth'), 'error');
    } else if (!isUsernameCorrect) {
      setError(t('invalidUsername'));
      showNotification(t('invalidUsername'), 'error');
    } else if (!isPasswordCorrect) {
      setError(t('invalidPassword'));
      showNotification(t('invalidPassword'), 'error');
    } else {
      // ถ้าถูกต้องทั้งหมด
      const mockUser = { username: 'admin', role: 'admin' };
      const mockToken = 'mock-token-123';
      login(mockToken, mockUser);
      showNotification(t('loginSuccess'), 'success');
      navigate('/dashboard');
    }
  };

  return (
    <div className={`login-container ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="login-banner">
        <div className="banner-content">
          <div className="company-logo">
            <img src="/assets/images/logo.png" alt="Company Logo" />
          </div>
          <h1>{t('systemTitle')}</h1>
          <p>{t('systemDescription')}</p>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20h.01"></path>
                  <path d="M7 20v-4"></path>
                  <path d="M12 20v-8"></path>
                  <path d="M17 20V8"></path>
                  <path d="M22 4v16"></path>
                </svg>
              </div>
              <div className="feature-text">
                <h3>{t('feature1Title')}</h3>
                <p>{t('feature1Description')}</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="feature-text">
                <h3>{t('feature2Title')}</h3>
                <p>{t('feature2Description')}</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" x2="12" y1="22" y2="12"></line>
                </svg>
              </div>
              <div className="feature-text">
                <h3>{t('feature3Title')}</h3>
                <p>{t('feature3Description')}</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <div className="feature-text">
                <h3>{t('feature4Title')}</h3>
                <p>{t('feature4Description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-form-container">
        <div className="theme-toggle" onClick={toggleTheme}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--icon-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="glow"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <path d="M12 1v2"></path>
            <path d="M12 21v2"></path>
            <path d="M4.22 4.22l1.42 1.42"></path>
            <path d="M18.36 18.36l1.42 1.42"></path>
            <path d="M1 12h2"></path>
            <path d="M21 12h2"></path>
            <path d="M4.22 19.78l1.42-1.42"></path>
            <path d="M18.36 5.64l1.42-1.42"></path>
          </svg>
        </div>

        <div className="language-toggle" onClick={toggleLanguage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--icon-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="glow"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            <path d="M2 12h20"></path>
          </svg>
          <span className="glow">{t('languageCode') === 'th' ? 'TH' : 'EN'}</span>
        </div>

        <div className="login-box">
          <div className="login-header">
            <div className="logo">IMS</div>
            <h2>{t('welcomeBack')}</h2>
            <p>{t('loginToManage')}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">{t('usernameOrEmail')}</label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder={t('enterUsernameOrEmail')}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group password-group">
              <label htmlFor="password">{t('password')}</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="form-input"
                  placeholder={t('enterPassword')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {showPassword ? (
                      <>
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </>
                    ) : (
                      <>
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                        <line x1="2" x2="22" y1="2" y2="22"></line>
                      </>
                    )}
                  </svg>
                </span>
              </div>
            </div>

            {error && (
              <p className="error-message">
                {error}
              </p>
            )}

            <div className="remember-forgot">
              <div className="remember">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember">{t('rememberMe')}</label>
              </div>
              <div className="forgot">
                <a href="#">{t('forgotPassword')}</a>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              {t('login')}
            </button>
          </form>

          <div className="login-footer">
            <p>© 2025 Inventory Management System. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;