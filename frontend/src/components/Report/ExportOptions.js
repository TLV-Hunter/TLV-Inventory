import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const ExportOptions = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('exportOptions')}</Typography>
      {/* เพิ่ม logic สำหรับตัวเลือกการส่งออก */}
    </div>
  );
};

export default ExportOptions;