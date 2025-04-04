import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box } from '@mui/material';

const Collaboration = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4">{t('collaboration')}</Typography>
        <Typography variant="body1">{t('collaborationMessage')}</Typography>
        {/* เพิ่ม components เช่น ChatSystem, TaskManager */}
      </Box>
    </Container>
  );
};

export default Collaboration;