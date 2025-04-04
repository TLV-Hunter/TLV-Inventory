import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const PermissionManager = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('permissionManager')}</Typography>
      {/* เพิ่ม logic สำหรับจัดการสิทธิ์ */}
    </div>
  );
};

export default PermissionManager;