import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const UnitManager = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('unitManager')}</Typography>
      {/* เพิ่ม logic สำหรับจัดการหน่วย */}
    </div>
  );
};

export default UnitManager;