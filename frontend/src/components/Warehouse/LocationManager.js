import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const LocationManager = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('locationManager')}</Typography>
      {/* เพิ่ม logic สำหรับจัดการตำแหน่ง */}
    </div>
  );
};

export default LocationManager;