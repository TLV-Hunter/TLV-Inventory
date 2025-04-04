import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const DeviceIntegration = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('deviceIntegration')}</Typography>
      {/* เพิ่ม logic สำหรับการรวมอุปกรณ์ */}
    </div>
  );
};

export default DeviceIntegration;