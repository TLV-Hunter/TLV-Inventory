import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box, TextField, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

const Reports = () => {
  const { t } = useTranslation();
  const [reports, setReports] = useState([]);
  const [newReport, setNewReport] = useState({ title: '', type: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/reports', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setReports(response.data);
    } catch (err) {
      setError(t('fetchFailed'));
    }
  };

  const handleGenerateReport = async () => {
    try {
      await axios.post('http://localhost:5000/api/reports', newReport, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setNewReport({ title: '', type: '' });
      fetchReports();
    } catch (err) {
      setError(err.response?.data?.message || t('addFailed'));
    }
  };

  const handleDeleteReport = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/reports/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      fetchReports();
    } catch (err) {
      setError(t('deleteFailed'));
    }
  };

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4">{t('reports')}</Typography>
        <Box mt={3} sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label={t('title')}
            value={newReport.title}
            onChange={(e) => setNewReport({ ...newReport, title: e.target.value })}
            required
          />
          <TextField
            label={t('type')}
            value={newReport.type}
            onChange={(e) => setNewReport({ ...newReport, type: e.target.value })}
            required
          />
          <Button variant="contained" color="primary" onClick={handleGenerateReport}>
            {t('generateReport')}
          </Button>
        </Box>
        {error && <Typography color="error">{error}</Typography>}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('title')}</TableCell>
              <TableCell>{t('type')}</TableCell>
              <TableCell>{t('actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.title}</TableCell>
                <TableCell>{report.type}</TableCell>
                <TableCell>
                  <Button color="error" onClick={() => handleDeleteReport(report.id)}>
                    {t('deleteReport')}
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

export default Reports;