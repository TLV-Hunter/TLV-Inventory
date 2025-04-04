import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App';
import { AppProvider } from './contexts/AppContext';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';

i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <I18nextProvider i18n={i18n}>
      <AppProvider>
        <AuthProvider>
          <NotificationProvider>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </NotificationProvider>
        </AuthProvider>
      </AppProvider>
    </I18nextProvider>
  </Router>
);