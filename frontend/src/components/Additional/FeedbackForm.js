import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const FeedbackForm = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('feedbackForm')}</Typography>
      {/* เพิ่ม logic สำหรับฟอร์มความคิดเห็น */}
    </div>
  );
};

export default FeedbackForm;