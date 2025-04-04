import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from '@mui/material';
import Quagga from 'quagga'; // Library สำหรับสแกนบาร์โค้ด

const BarcodeScanner = () => {
  const { t } = useTranslation();
  const [barcode, setBarcode] = useState('');

  const startScanner = () => {
    Quagga.init({
      inputStream: { name: 'Live', type: 'LiveStream', target: document.querySelector('#scanner') },
      decoder: { readers: ['code_128_reader'] },
    }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      Quagga.start();
    });

    Quagga.onDetected((data) => {
      setBarcode(data.codeResult.code);
      Quagga.stop();
    });
  };

  return (
    <div>
      <Typography variant="h6">{t('barcodeScanner')}</Typography>
      <div id="scanner" style={{ width: '100%', height: '300px' }}></div>
      <Button variant="contained" onClick={startScanner}>{t('startScan')}</Button>
      {barcode && <Typography>Scanned Barcode: {barcode}</Typography>}
    </div>
  );
};

export default BarcodeScanner;