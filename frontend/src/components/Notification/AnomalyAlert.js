import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const AnomalyAlert = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('anomalyAlert')}</Typography>
      {/* เพิ่ม logic สำหรับแจ้งเตือนความผิดปกติ */}
    </div>
  );
};

export default AnomalyAlert;