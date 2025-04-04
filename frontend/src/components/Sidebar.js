import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import AppContext from '../contexts/AppContext';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Box } from '@mui/material';
import { Dashboard, Inventory, Warehouse, ShoppingCart, Assessment, Settings, People, Description, LocalShipping, Group, Person } from '@mui/icons-material';

const Sidebar = () => {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);
  const location = useLocation();
  const [selectedPath, setSelectedPath] = React.useState(location.pathname);

  const handleSelect = (path) => {
    setSelectedPath(path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: theme === 'light' ? '#f5f5f5' : '#333',
          color: theme === 'light' ? '#333' : '#fff',
          borderRight: theme === 'light' ? '1px solid #ddd' : '1px solid #555',
        },
      }}
    >
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {t('appTitle')}
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: theme === 'light' ? '#ddd' : '#555' }} />
      <List>
        <ListItem
          button
          component={Link}
          to="/dashboard"
          onClick={() => handleSelect('/dashboard')}
          sx={{
            backgroundColor: selectedPath === '/dashboard' ? (theme === 'light' ? '#e0e0e0' : '#555') : 'transparent',
          }}
        >
          <ListItemIcon>
            <Dashboard sx={{ color: theme === 'light' ? '#333' : '#fff' }} />
          </ListItemIcon>
          <ListItemText primary={t('dashboard')} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/inventory"
          onClick={() => handleSelect('/inventory')}
          sx={{
            backgroundColor: selectedPath === '/inventory' ? (theme === 'light' ? '#e0e0e0' : '#555') : 'transparent',
          }}
        >
          <ListItemIcon>
            <Inventory sx={{ color: theme === 'light' ? '#333' : '#fff' }} />
          </ListItemIcon>
          <ListItemText primary={t('inventory')} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/warehouse"
          onClick={() => handleSelect('/warehouse')}
          sx={{
            backgroundColor: selectedPath === '/warehouse' ? (theme === 'light' ? '#e0e0e0' : '#555') : 'transparent',
          }}
        >
          <ListItemIcon>
            <Warehouse sx={{ color: theme === 'light' ? '#333' : '#fff' }} />
          </ListItemIcon>
          <ListItemText primary={t('warehouse')} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/purchase-orders"
          onClick={() => handleSelect('/purchase-orders')}
          sx={{
            backgroundColor: selectedPath === '/purchase-orders' ? (theme === 'light' ? '#e0e0e0' : '#555') : 'transparent',
          }}
        >
          <ListItemIcon>
            <ShoppingCart sx={{ color: theme === 'light' ? '#333' : '#fff' }} />
          </ListItemIcon>
          <ListItemText primary={t('purchaseOrders')} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/reports"
          onClick={() => handleSelect('/reports')}
          sx={{
            backgroundColor: selectedPath === '/reports' ? (theme === 'light' ? '#e0e0e0' : '#555') : 'transparent',
          }}
        >
          <ListItemIcon>
            <Assessment sx={{ color: theme === 'light' ? '#333' : '#fff' }} />
          </ListItemIcon>
          <ListItemText primary={t('reports')} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/settings"
          onClick={() => handleSelect('/settings')}
          sx={{
            backgroundColor: selectedPath === '/settings' ? (theme === 'light' ? '#e0e0e0' : '#555') : 'transparent',
          }}
        >
          <ListItemIcon>
            <Settings sx={{ color: theme === 'light' ? '#333' : '#fff' }} />
          </ListItemIcon>
          <ListItemText primary={t('settings')} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/users"
          onClick={() => handleSelect('/users')}
          sx={{
            backgroundColor: selectedPath === '/users' ? (theme === 'light' ? '#e0e0e0' : '#555') : 'transparent',
          }}
        >
          <ListItemIcon>
            <People sx={{ color: theme === 'light' ? '#333' : '#fff' }} />
          </ListItemIcon>
          <ListItemText primary={t('userManagement')} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/documents"
          onClick={() => handleSelect('/documents')}
          sx={{
            backgroundColor: selectedPath === '/documents' ? (theme === 'light' ? '#e0e0e0' : '#555') : 'transparent',
          }}
        >
          <ListItemIcon>
            <Description sx={{ color: theme === 'light' ? '#333' : '#fff' }} />
          </ListItemIcon>
          <ListItemText primary={t('documentManagement')} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/logistics"
          onClick={() => handleSelect('/logistics')}
          sx={{
            backgroundColor: selectedPath === '/logistics' ? (theme === 'light' ? '#e0e0e0' : '#555') : 'transparent',
          }}
        >
          <ListItemIcon>
            <LocalShipping sx={{ color: theme === 'light' ? '#333' : '#fff' }} />
          </ListItemIcon>
          <ListItemText primary={t('logistics')} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/collaboration"
          onClick={() => handleSelect('/collaboration')}
          sx={{
            backgroundColor: selectedPath === '/collaboration' ? (theme === 'light' ? '#e0e0e0' : '#555') : 'transparent',
          }}
        >
          <ListItemIcon>
            <Group sx={{ color: theme === 'light' ? '#333' : '#fff' }} />
          </ListItemIcon>
          <ListItemText primary={t('collaboration')} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/profile"
          onClick={() => handleSelect('/profile')}
          sx={{
            backgroundColor: selectedPath === '/profile' ? (theme === 'light' ? '#e0e0e0' : '#555') : 'transparent',
          }}
        >
          <ListItemIcon>
            <Person sx={{ color: theme === 'light' ? '#333' : '#fff' }} />
          </ListItemIcon>
          <ListItemText primary={t('profile')} />
        </ListItem>
      </List>
      <Divider sx={{ backgroundColor: theme === 'light' ? '#ddd' : '#555' }} />
    </Drawer>
  );
};

export default Sidebar;