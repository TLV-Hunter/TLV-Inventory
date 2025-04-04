import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const QualityControl = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('qualityControl')}</Typography>
      {/* เพิ่ม logic สำหรับการควบคุมคุณภาพ */}
    </div>
  );
};

export default QualityControl;