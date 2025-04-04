import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const StagnantStockAlert = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('stagnantStockAlert')}</Typography>
      {/* เพิ่ม logic สำหรับแจ้งเตือนสต็อกค้าง */}
    </div>
  );
};

export default StagnantStockAlert;