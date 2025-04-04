import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box } from '@mui/material';

const Settings = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4">{t('settings')}</Typography>
        <Typography variant="body1">{t('settingsMessage')}</Typography>
        {/* เพิ่มฟอร์มสำหรับตั้งค่า เช่น ภาษา, ธีม, การแจ้งเตือน */}
      </Box>
    </Container>
  );
};

export default Settings;