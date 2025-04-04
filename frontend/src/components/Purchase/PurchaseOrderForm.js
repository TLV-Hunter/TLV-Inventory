import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Box } from '@mui/material';

const PurchaseOrderForm = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [purchaseOrder, setPurchaseOrder] = useState({ supplier: '', totalAmount: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(purchaseOrder);
    setPurchaseOrder({ supplier: '', totalAmount: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField
        label={t('supplier')}
        value={purchaseOrder.supplier}
        onChange={(e) => setPurchaseOrder({ ...purchaseOrder, supplier: e.target.value })}
        required
      />
      <TextField
        label={t('totalAmount')}
        type="number"
        value={purchaseOrder.totalAmount}
        onChange={(e) => setPurchaseOrder({ ...purchaseOrder, totalAmount: e.target.value })}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        {t('addPurchaseOrder')}
      </Button>
    </Box>
  );
};

export default PurchaseOrderForm;