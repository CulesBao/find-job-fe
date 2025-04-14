import React from 'react';
import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import { Instagram, Notifications } from '@mui/icons-material';
import Logo from '../layout/Logo'; // Import Logo.jsx

const Navigation = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: '#ffffff', color: '#333', boxShadow: 'none' }}
    >
      <Toolbar
        sx={{
          height: 70, // Chiều cao cố định
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', // Căn giữa theo trục dọc
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', maxHeight: '100%' }}>
          <Logo style={{ maxHeight: 50 }} /> {/* Giới hạn chiều cao logo */}
        </Box>

        {/* Các icon và nút Post A Jobs */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Icon Notifications */}
          <IconButton sx={{ color: '#333', position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Notifications fontSize="medium" />
            <Box
              sx={{
                position: 'absolute',
                top: 8, // Điều chỉnh vị trí cho phù hợp
                right: 8,
                width: 8,
                height: 8,
                backgroundColor: '#f44336',
                borderRadius: '50%',
              }}
            />
          </IconButton>

          {/* Nút Post A Jobs */}
          <Button
            variant="outlined"
            sx={{
              textTransform: 'none',
              fontSize: 14,
              borderColor: '#1976d2',
              color: '#1976d2',
              '&:hover': {
                borderColor: '#1565c0',
                backgroundColor: 'rgba(21,101,192,0.04)',
              },
            }}
          >
            Post A Jobs
          </Button>

          {/* Icon Instagram */}
          <IconButton sx={{ color: '#E4405F', display: 'flex', alignItems: 'center' }}>
            <Instagram fontSize="medium" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;