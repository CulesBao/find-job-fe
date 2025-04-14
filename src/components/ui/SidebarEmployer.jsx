import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import WorkIcon from '@mui/icons-material/Work';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'; // Biểu tượng mới cho Founding Info
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const drawerWidth = 280;

const SidebarEmployer = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      {/* Header */}
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <Typography variant="subtitle2" color="textSecondary">
          EMPLOYERS DASHBOARD
        </Typography>
      </Box>

      <Divider />

      {/* Navigation Items */}
      <List>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.1)',
              color: '#1976d2',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.1)',
              color: '#1976d2',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Employers Profile" />
        </ListItem>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.1)',
              color: '#1976d2',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <PostAddIcon />
          </ListItemIcon>
          <ListItemText primary="Post a Job" />
        </ListItem>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.1)',
              color: '#1976d2',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="My Jobs" />
        </ListItem>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.1)',
              color: '#1976d2',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <BookmarkIcon />
          </ListItemIcon>
          <ListItemText primary="Saved Candidate" />
        </ListItem>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.1)',
              color: '#1976d2',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary="Plans & Billing" />
        </ListItem>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.1)',
              color: '#1976d2',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <PersonOutlineIcon /> {/* Biểu tượng mới */}
          </ListItemIcon>
          <ListItemText primary="Founding Info" />
        </ListItem>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.1)',
              color: '#1976d2',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>

      <Divider />

      {/* Footer */}
      <List>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.1)',
              color: '#1976d2',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Log-out" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarEmployer;