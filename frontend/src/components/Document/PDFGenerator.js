import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from '@mui/material';
import { generatePDF } from '../../utils/pdfGenerator';

const PDFGenerator = ({ data }) => {
  const { t } = useTranslation();

  const handleGeneratePDF = () => {
    generatePDF(data, 'report');
  };

  return (
    <div>
      <Typography variant="h6">{t('pdfGenerator')}</Typography>
      <Button variant="contained" onClick={handleGeneratePDF}>
        {t('generatePDF')}
      </Button>
    </div>
  );
};

export default PDFGenerator;