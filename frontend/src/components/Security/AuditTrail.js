import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const AuditTrail = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('auditTrail')}</Typography>
      {/* เพิ่ม logic สำหรับตรวจสอบ Audit Trail */}
    </div>
  );
};

export default AuditTrail;