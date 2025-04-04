import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const RecoveryPlan = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('recoveryPlan')}</Typography>
      {/* เพิ่ม logic สำหรับแผนการกู้คืน */}
    </div>
  );
};

export default RecoveryPlan;