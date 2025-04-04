import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const AnomalyDetection = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('anomalyDetection')}</Typography>
      {/* เพิ่ม logic สำหรับตรวจจับความผิดปกติ */}
    </div>
  );
};

export default AnomalyDetection;