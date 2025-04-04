import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import WarehouseList from '../components/Warehouse/WarehouseList';
import axios from 'axios';

const Warehouse = () => {
  const { t } = useTranslation();
  const [warehouses, setWarehouses] = useState([]);
  const [newWarehouse, setNewWarehouse] = useState({ name: '', location: '', capacity: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchWarehouses();
  }, []);

  const fetchWarehouses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/warehouses', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setWarehouses(response.data);
    } catch (err) {
      setError(t('fetchFailed'));
    }
  };

  const handleAddWarehouse = async () => {
    try {
      await axios.post('http://localhost:5000/api/warehouses', newWarehouse, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setNewWarehouse({ name: '', location: '', capacity: '' });
      fetchWarehouses();
    } catch (err) {
      setError(err.response?.data?.message || t('addFailed'));
    }
  };

  const handleDeleteWarehouse = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/warehouses/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      fetchWarehouses();
    } catch (err) {
      setError(t('deleteFailed'));
    }
  };

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4">{t('warehouse')}</Typography>
        <Box mt={3} sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label={t('name')}
            value={newWarehouse.name}
            onChange={(e) => setNewWarehouse({ ...newWarehouse, name: e.target.value })}
            required
          />
          <TextField
            label={t('location')}
            value={newWarehouse.location}
            onChange={(e) => setNewWarehouse({ ...newWarehouse, location: e.target.value })}
            required
          />
          <TextField
            label={t('capacity')}
            type="number"
            value={newWarehouse.capacity}
            onChange={(e) => setNewWarehouse({ ...newWarehouse, capacity: e.target.value })}
            required
          />
          <Button variant="contained" color="primary" onClick={handleAddWarehouse}>
            {t('addWarehouse')}
          </Button>
        </Box>
        {error && <Typography color="error">{error}</Typography>}
        <WarehouseList warehouses={warehouses} onDelete={handleDeleteWarehouse} />
      </Box>
    </Container>
  );
};

export default Warehouse;