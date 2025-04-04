import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const MetadataSearch = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h6">{t('metadataSearch')}</Typography>
      {/* เพิ่ม logic สำหรับค้นหาเมตาดาต้า */}
    </div>
  );
};

export default MetadataSearch;