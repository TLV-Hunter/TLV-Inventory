import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Box } from '@mui/material';

const UserForm = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [user, setUser] = useState({ username: '', password: '', role: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({ username: '', password: '', role: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField
        label={t('username')}
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        required
      />
      <TextField
        label={t('password')}
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        required
      />
      <TextField
        label={t('role')}
        value={user.role}
        onChange={(e) => setUser({ ...user, role: e.target.value })}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        {t('addUser')}
      </Button>
    </Box>
  );
};

export default UserForm;