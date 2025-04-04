import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const RealTimeTracking = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('realTimeTracking')}</Typography>
      {/* เพิ่ม logic สำหรับการติดตามแบบเรียลไทม์ */}
    </div>
  );
};

export default RealTimeTracking;