import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box } from '@mui/material';
import ProductForm from '../components/Product/ProductForm';
import ProductList from '../components/Product/ProductList';
import axios from 'axios';

const Inventory = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setProducts(response.data);
    } catch (err) {
      setError(t('fetchFailed'));
    }
  };

  const handleAddProduct = async (product) => {
    try {
      await axios.post('http://localhost:5000/api/products', product, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      fetchProducts();
    } catch (err) {
      setError(err.response?.data?.message || t('addFailed'));
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      fetchProducts();
    } catch (err) {
      setError(t('deleteFailed'));
    }
  };

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4">{t('inventory')}</Typography>
        <ProductForm onSubmit={handleAddProduct} />
        {error && <Typography color="error">{error}</Typography>}
        <ProductList products={products} onDelete={handleDeleteProduct} />
      </Box>
    </Container>
  );
};

export default Inventory;