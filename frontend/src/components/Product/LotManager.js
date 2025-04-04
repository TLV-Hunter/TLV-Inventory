import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const LotManager = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('lotManager')}</Typography>
      {/* เพิ่ม logic สำหรับจัดการ Lot */}
    </div>
  );
};

export default LotManager;