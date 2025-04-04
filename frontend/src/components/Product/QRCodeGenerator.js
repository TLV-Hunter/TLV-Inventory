import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const QRCodeGenerator = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('qrCodeGenerator')}</Typography>
      {/* เพิ่ม logic สำหรับสร้าง QR Code */}
    </div>
  );
};

export default QRCodeGenerator;