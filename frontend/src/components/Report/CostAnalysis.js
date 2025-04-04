import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const CostAnalysis = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('costAnalysis')}</Typography>
      {/* เพิ่ม logic สำหรับวิเคราะห์ต้นทุน */}
    </div>
  );
};

export default CostAnalysis;