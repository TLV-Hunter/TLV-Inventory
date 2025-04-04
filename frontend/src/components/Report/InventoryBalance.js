import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const InventoryBalance = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('inventoryBalance')}</Typography>
      {/* เพิ่ม logic สำหรับยอดคงเหลือในคลัง */}
    </div>
  );
};

export default InventoryBalance;