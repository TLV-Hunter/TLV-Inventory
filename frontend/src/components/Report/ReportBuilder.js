import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const ReportBuilder = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('reportBuilder')}</Typography>
      {/* เพิ่ม logic สำหรับสร้างรายงาน */}
    </div>
  );
};

export default ReportBuilder;