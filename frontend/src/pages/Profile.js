import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../contexts/AuthContext'; // เปลี่ยนเป็น AuthContext
import { Container, Typography, Box } from '@mui/material';

const Profile = () => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext); // ใช้ AuthContext

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4">{t('profile')}</Typography>
        <Typography variant="body1">{t('profileMessage')}</Typography>
        {user && (
          <Box mt={2}>
            <Typography variant="body1">
              {t('username')}: {user.username}
            </Typography>
            <Typography variant="body1">
              {t('role')}: {user.role}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Profile;