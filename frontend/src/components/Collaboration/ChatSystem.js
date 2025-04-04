import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const ChatSystem = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('chatSystem')}</Typography>
      {/* เพิ่ม logic สำหรับระบบแชท */}
    </div>
  );
};

export default ChatSystem;