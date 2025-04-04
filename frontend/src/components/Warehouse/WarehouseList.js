import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const WarehouseList = ({ warehouses, onDelete }) => {
  const { t } = useTranslation();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{t('name')}</TableCell>
          <TableCell>{t('location')}</TableCell>
          <TableCell>{t('capacity')}</TableCell>
          <TableCell>{t('actions')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {warehouses.map((warehouse) => (
          <TableRow key={warehouse.id}>
            <TableCell>{warehouse.name}</TableCell>
            <TableCell>{warehouse.location}</TableCell>
            <TableCell>{warehouse.capacity}</TableCell>
            <TableCell>
              <Button color="error" onClick={() => onDelete(warehouse.id)}>
                {t('deleteWarehouse')}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WarehouseList;