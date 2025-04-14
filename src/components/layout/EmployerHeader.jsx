import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, MenuItem, Select } from '@mui/material';
import { Phone, Language } from '@mui/icons-material';

const EmployerHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState('Dashboard'); // Mục mặc định được chọn

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu); // Cập nhật trạng thái khi click
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#333',
        borderBottom: '1px solid #ddd',
        padding: '0 16px',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', minHeight: 50 }}>
        {/* Phần bên trái: Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {['Home', 'Find Candidate', 'Dashboard', 'My Jobs', 'Applications', 'Customer Supports'].map((menu) => (
            <Typography
              key={menu}
              variant="body2"
              onClick={() => handleMenuClick(menu)}
              sx={{
                cursor: 'pointer',
                color: selectedMenu === menu ? 'blue' : 'textSecondary',
                fontWeight: selectedMenu === menu ? 'bold' : 'normal',
                '&:hover': {
                  color: 'blue',
                },
              }}
            >
              {menu}
            </Typography>
          ))}
        </Box>

        {/* Phần bên phải: Thông tin liên hệ */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Số điện thoại */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Phone fontSize="small" />
            <Typography variant="body2">+1-202-555-0178</Typography>
          </Box>

          {/* Ngôn ngữ */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Language fontSize="small" />
            <Select
              defaultValue="English"
              variant="standard"
              disableUnderline
              sx={{ fontSize: 14, color: '#333' }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Vietnamese">Vietnamese</MenuItem>
            </Select>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default EmployerHeader;