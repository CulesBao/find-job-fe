import { Box, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import {
  Dashboard,
  Person,
  Work,
  Bookmark,
  Payment,
  Business,
  Settings,
  Logout,
} from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 240, // Chiều rộng Sidebar
        height: '100vh', // Chiều cao toàn màn hình
        backgroundColor: '#f9f9f9', // Màu nền
        borderRight: '1px solid #ddd', // Đường viền bên phải
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Phần trên: Danh sách các mục */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            py: 2,
            borderBottom: '1px solid #ddd',
          }}
        >
          EMPLOYERS DASHBOARD
        </Typography>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Employers Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Work />
            </ListItemIcon>
            <ListItemText primary="Post a Job" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Bookmark />
            </ListItemIcon>
            <ListItemText primary="My Jobs" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Bookmark />
            </ListItemIcon>
            <ListItemText primary="Saved Candidate" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Payment />
            </ListItemIcon>
            <ListItemText primary="Plans & Billing" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary="All Companies" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Box>

      {/* Phần dưới: Đăng xuất */}
      <Box>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Log-out" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;