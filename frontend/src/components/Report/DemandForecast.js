import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const DemandForecast = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('demandForecast')}</Typography>
      {/* เพิ่ม logic สำหรับพยากรณ์ความต้องการ */}
    </div>
  );
};

export default DemandForecast;