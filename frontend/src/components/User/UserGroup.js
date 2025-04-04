import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const UserGroup = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('userGroup')}</Typography>
      {/* เพิ่ม logic สำหรับจัดการกลุ่มผู้ใช้ */}
    </div>
  );
};

export default UserGroup;