import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const StockInOut = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('stockInOut')}</Typography>
      {/* เพิ่ม logic สำหรับจัดการ Stock In/Out */}
    </div>
  );
};

export default StockInOut;