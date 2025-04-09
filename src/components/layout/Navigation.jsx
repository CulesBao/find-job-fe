import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Select,
  MenuItem,
  IconButton,
  Divider
} from '@mui/material';
import { Mic,  Instagram, Notifications } from '@mui/icons-material';

const Navigation = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ color: '#333' }}>
      {/* Thanh đầu tiên (thanh mỏng, màu #f0f0f0) */}
      <Box sx={{ backgroundColor: '#f0f0f0', borderBottom: '1px solid #ddd' }}>
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 40 }}>
          {/* Menu bên trái */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button sx={{ textTransform: 'none', color: '#333', fontSize: 14 }}>
              Home
            </Button>
            <Button sx={{ textTransform: 'none', color: '#333', fontSize: 14 }}>
              Find Candidates
            </Button>
            <Button sx={{ textTransform: 'none', color: '#333', fontSize: 14 }}>
              Dashboard
            </Button>
            <Button sx={{ textTransform: 'none', color: '#333', fontSize: 14 }}>
              My Jobs
            </Button>
            <Button sx={{ textTransform: 'none', color: '#333', fontSize: 14 }}>
              Applications
            </Button>
            <Button sx={{ textTransform: 'none', color: '#333', fontSize: 14 }}>
              Customer Supports
            </Button>
          </Box>

          {/* Số điện thoại và chọn ngôn ngữ */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ fontSize: 14 }}>
              +1 (234) 567-890
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Select
              defaultValue="en"
              variant="standard"
              disableUnderline
              sx={{ fontSize: 14, color: '#333' }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="vi">Tiếng Việt</MenuItem>
              {/* Thêm ngôn ngữ khác nếu cần */}
            </Select>
          </Box>
        </Toolbar>
      </Box>

      {/* Thanh thứ hai (màu #ffffff) */}
      <Box sx={{ backgroundColor: '#ffffff' }}>
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 60 }}>
          {/* Logo và tên app */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img
              src="https://via.placeholder.com/40" // Thay bằng logo của bạn
              alt="MyJob Logo"
              style={{ height: 40 }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              MyJob
            </Typography>
          </Box>

          {/* Các icon và nút Post A Jobs */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
           

            {/* Nút Post A Jobs (Outlined) */}
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
            <IconButton sx={{ color: '#E4405F' }}>
              <Instagram />
            </IconButton>

            {/* Icon chuông (Notifications) */}
            <IconButton sx={{ color: '#333' }}>
              <Notifications />
            </IconButton>

          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navigation;
