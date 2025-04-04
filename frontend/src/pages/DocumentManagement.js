import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

const DocumentManagement = () => {
  const { t } = useTranslation();
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/documents', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setDocuments(response.data);
    } catch (err) {
      setError(t('fetchFailed'));
    }
  };

  const handleDeleteDocument = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/documents/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      fetchDocuments();
    } catch (err) {
      setError(t('deleteFailed'));
    }
  };

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4">{t('documentManagement')}</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('name')}</TableCell>
              <TableCell>{t('actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>{doc.name}</TableCell>
                <TableCell>
                  <Button color="error" onClick={() => handleDeleteDocument(doc.id)}>
                    {t('delete')}
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

export default DocumentManagement;