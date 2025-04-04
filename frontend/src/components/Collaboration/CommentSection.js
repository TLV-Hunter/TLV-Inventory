import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const CommentSection = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('commentSection')}</Typography>
      {/* เพิ่ม logic สำหรับส่วนความคิดเห็น */}
    </div>
  );
};

export default CommentSection;