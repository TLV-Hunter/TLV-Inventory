import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const WarehousePerformance = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('warehousePerformance')}</Typography>
      {/* เพิ่ม logic สำหรับประสิทธิภาพคลังสินค้า */}
    </div>
  );
};

export default WarehousePerformance;