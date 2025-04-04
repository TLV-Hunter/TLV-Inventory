import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const VersionControl = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('versionControl')}</Typography>
      {/* เพิ่ม logic สำหรับการควบคุมเวอร์ชัน */}
    </div>
  );
};

export default VersionControl;