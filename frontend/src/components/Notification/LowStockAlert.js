import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const LowStockAlert = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('lowStockAlert')}</Typography>
      {/* เพิ่ม logic สำหรับแจ้งเตือนสต็อกต่ำ */}
    </div>
  );
};

export default LowStockAlert;