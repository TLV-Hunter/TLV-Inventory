import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const ApprovalWorkflow = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('approvalWorkflow')}</Typography>
      {/* เพิ่ม logic สำหรับ workflow การอนุมัติ */}
    </div>
  );
};

export default ApprovalWorkflow;