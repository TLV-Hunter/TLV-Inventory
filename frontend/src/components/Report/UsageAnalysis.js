import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const UsageAnalysis = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('usageAnalysis')}</Typography>
      {/* เพิ่ม logic สำหรับวิเคราะห์การใช้งาน */}
    </div>
  );
};

export default UsageAnalysis;