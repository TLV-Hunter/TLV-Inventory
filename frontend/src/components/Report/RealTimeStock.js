import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const RealTimeStock = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('realTimeStock')}</Typography>
      {/* เพิ่ม logic สำหรับสต็อกแบบเรียลไทม์ */}
    </div>
  );
};

export default RealTimeStock;