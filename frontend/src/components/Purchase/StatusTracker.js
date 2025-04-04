import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const StatusTracker = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('statusTracker')}</Typography>
      {/* เพิ่ม logic สำหรับติดตามสถานะ */}
    </div>
  );
};

export default StatusTracker;