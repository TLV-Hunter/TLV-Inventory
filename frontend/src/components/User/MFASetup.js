import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const MFASetup = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('mfaSetup')}</Typography>
      {/* เพิ่ม logic สำหรับตั้งค่า MFA */}
    </div>
  );
};

export default MFASetup;