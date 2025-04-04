import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Box } from '@mui/material';

const ProductForm = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [product, setProduct] = useState({ name: '', description: '', category: '', price: '', stock: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({ name: '', description: '', category: '', price: '', stock: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField
        label={t('name')}
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        required
      />
      <TextField
        label={t('description')}
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
      />
      <TextField
        label={t('category')}
        value={product.category}
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
      />
      <TextField
        label={t('price')}
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        required
      />
      <TextField
        label={t('stock')}
        type="number"
        value={product.stock}
        onChange={(e) => setProduct({ ...product, stock: e.target.value })}
      />
      <Button type="submit" variant="contained" color="primary">
        {t('addProduct')}
      </Button>
    </Box>
  );
};

export default ProductForm;