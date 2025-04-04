import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const ValuationMethod = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('valuationMethod')}</Typography>
      {/* เพิ่ม logic สำหรับวิธีการประเมินมูลค่า */}
    </div>
  );
};

export default ValuationMethod;