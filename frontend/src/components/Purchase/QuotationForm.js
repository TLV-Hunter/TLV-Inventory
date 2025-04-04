import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const QuotationForm = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('quotationForm')}</Typography>
      {/* เพิ่ม logic สำหรับฟอร์มใบเสนอราคา */}
    </div>
  );
};

export default QuotationForm;