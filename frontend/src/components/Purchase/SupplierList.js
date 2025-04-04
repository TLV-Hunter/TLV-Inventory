import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const SupplierList = ({ suppliers, onDelete }) => {
  const { t } = useTranslation();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{t('supplier')}</TableCell>
          <TableCell>{t('actions')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {suppliers.map((supplier) => (
          <TableRow key={supplier.id}>
            <TableCell>{supplier.name}</TableCell>
            <TableCell>
              <Button color="error" onClick={() => onDelete(supplier.id)}>
                {t('delete')}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SupplierList;