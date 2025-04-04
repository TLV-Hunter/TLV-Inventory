import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../contexts/AuthContext'; // เปลี่ยนเป็น AuthContext
import { Container, Typography, Box } from '@mui/material';

const UserManagement = () => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext); // ใช้ AuthContext

  if (user?.role !== 'admin') {
    return (
      <Container>
        <Box mt={5}>
          <Typography variant="h4" color="error">
            {t('accessDenied')}
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4">{t('userManagement')}</Typography>
        <Typography variant="body1">{t('userManagementMessage')}</Typography>
      </Box>
    </Container>
  );
};

export default UserManagement;