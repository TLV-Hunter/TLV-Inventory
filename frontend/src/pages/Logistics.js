import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box } from '@mui/material';

const Logistics = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4">{t('logistics')}</Typography>
        <Typography variant="body1">{t('logisticsMessage')}</Typography>
        {/* เพิ่ม components เช่น RouteOptimizer, RealTimeTracking */}
      </Box>
    </Container>
  );
};

export default Logistics;