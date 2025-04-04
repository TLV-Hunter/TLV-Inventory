import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const ReportDashboard = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('reportDashboard')}</Typography>
      {/* เพิ่ม logic สำหรับแดชบอร์ดรายงาน */}
    </div>
  );
};

export default ReportDashboard;