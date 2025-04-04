import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../contexts/AuthContext'; // เปลี่ยนเป็น AuthContext
import AppContext from '../contexts/AppContext';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Navbar = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useContext(AppContext);
  const { logout } = useContext(AuthContext); // ใช้ AuthContext

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: theme === 'light' ? '#1976d2' : '#333' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {t('appTitle')}
        </Typography>
        <Button color="inherit" onClick={logout}>
          {t('logout')}
        </Button>
        <IconButton onClick={toggleTheme} color="inherit">
          {theme === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;