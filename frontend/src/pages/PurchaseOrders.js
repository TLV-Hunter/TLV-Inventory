import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import PurchaseOrderForm from '../components/Purchase/PurchaseOrderForm';
import axios from 'axios';

const PurchaseOrders = () => {
  const { t } = useTranslation();
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPurchaseOrders();
  }, []);

  const fetchPurchaseOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/purchases', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setPurchaseOrders(response.data);
    } catch (err) {
      setError(t('fetchFailed'));
    }
  };

  const handleAddPurchaseOrder = async (purchaseOrder) => {
    try {
      await axios.post('http://localhost:5000/api/purchases', purchaseOrder, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      fetchPurchaseOrders();
    } catch (err) {
      setError(err.response?.data?.message || t('addFailed'));
    }
  };

  const handleDeletePurchaseOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/purchases/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      fetchPurchaseOrders();
    } catch (err) {
      setError(t('deleteFailed'));
    }
  };

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4">{t('purchaseOrders')}</Typography>
        <PurchaseOrderForm onSubmit={handleAddPurchaseOrder} />
        {error && <Typography color="error">{error}</Typography>}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('supplier')}</TableCell>
              <TableCell>{t('totalAmount')}</TableCell>
              <TableCell>{t('actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {purchaseOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.supplier}</TableCell>
                <TableCell>{order.totalAmount}</TableCell>
                <TableCell>
                  <Button color="error" onClick={() => handleDeletePurchaseOrder(order.id)}>
                    {t('deletePurchaseOrder')}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default PurchaseOrders;