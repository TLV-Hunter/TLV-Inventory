import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const ProductList = ({ products, onDelete }) => {
  const { t } = useTranslation();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{t('name')}</TableCell>
          <TableCell>{t('description')}</TableCell>
          <TableCell>{t('category')}</TableCell>
          <TableCell>{t('price')}</TableCell>
          <TableCell>{t('stock')}</TableCell>
          <TableCell>{t('actions')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>
              <Button color="error" onClick={() => onDelete(product.id)}>
                {t('deleteProduct')}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductList;