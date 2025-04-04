import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const TransferForm = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('transferForm')}</Typography>
      {/* เพิ่ม logic สำหรับโอนย้ายสต็อก */}
    </div>
  );
};

export default TransferForm;