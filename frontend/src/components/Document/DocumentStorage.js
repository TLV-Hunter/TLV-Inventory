import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const DocumentStorage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('documentStorage')}</Typography>
      {/* เพิ่ม logic สำหรับจัดเก็บเอกสาร */}
    </div>
  );
};

export default DocumentStorage;