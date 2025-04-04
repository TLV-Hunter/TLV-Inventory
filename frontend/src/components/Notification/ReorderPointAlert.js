import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const ReorderPointAlert = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('reorderPointAlert')}</Typography>
      {/* เพิ่ม logic สำหรับแจ้งเตือนจุดสั่งซื้อใหม่ */}
    </div>
  );
};

export default ReorderPointAlert;