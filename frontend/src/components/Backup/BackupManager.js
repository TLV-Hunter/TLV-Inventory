import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const BackupManager = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('backupManager')}</Typography>
      {/* เพิ่ม logic สำหรับจัดการการสำรองข้อมูล */}
    </div>
  );
};

export default BackupManager;