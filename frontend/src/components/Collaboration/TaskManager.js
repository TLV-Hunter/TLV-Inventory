import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const TaskManager = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('taskManager')}</Typography>
      {/* เพิ่ม logic สำหรับจัดการงาน */}
    </div>
  );
};

export default TaskManager;