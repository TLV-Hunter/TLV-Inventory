import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box, Button, CircularProgress } from '@mui/material';
import AppContext from '../contexts/AppContext';

const Backup = () => {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);
  const [isBackingUp, setIsBackingUp] = useState(false);

  const handleBackup = () => {
    setIsBackingUp(true);
    // จำลองการ backup (ในของจริงต้องเรียก API)
    setTimeout(() => {
      setIsBackingUp(false);
      alert('Backup completed successfully!');
    }, 2000);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, color: theme === 'light' ? '#6e8efb' : '#a777e3', fontWeight: 'bold' }}>
        {t('backup')}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="body1" sx={{ color: theme === 'light' ? '#333' : '#ccc' }}>
          Click the button below to backup your data.
        </Typography>
        <Button
          variant="contained"
          onClick={handleBackup}
          disabled={isBackingUp}
          sx={{
            backgroundColor: '#6e8efb',
            '&:hover': {
              backgroundColor: '#5a78e0',
              transform: 'scale(1.02)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          {isBackingUp ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : t('backupNow')}
        </Button>
      </Box>
    </Container>
  );
};

export default Backup;