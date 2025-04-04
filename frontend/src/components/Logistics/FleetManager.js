import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const FleetManager = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('fleetManager')}</Typography>
      {/* เพิ่ม logic สำหรับจัดการกองยานพาหนะ */}
    </div>
  );
};

export default FleetManager;