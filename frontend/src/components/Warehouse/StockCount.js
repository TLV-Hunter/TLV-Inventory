import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const StockCount = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('stockCount')}</Typography>
      {/* เพิ่ม logic สำหรับนับสต็อก */}
    </div>
  );
};

export default StockCount;