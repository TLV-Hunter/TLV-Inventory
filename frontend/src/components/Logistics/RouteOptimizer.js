import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const RouteOptimizer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('routeOptimizer')}</Typography>
      {/* เพิ่ม logic สำหรับ优化เส้นทาง */}
    </div>
  );
};

export default RouteOptimizer;