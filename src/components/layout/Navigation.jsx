import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import {
  Dashboard,
  ExitToApp,
  Notifications,
  Settings,
} from "@mui/icons-material";
import Logo from "../layout/Logo";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (user) {
      const newAvatar =
        user?.role === "CANDIDATE"
          ? user.candidate_profile.avatar_url
          : user.role === "EMPLOYER"
          ? user.employer_profile.logo_url
          : null;
      setAvatar(newAvatar);
    }
  }, [user]);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/auth/login", { replace: true });
  };

  const handleNavigate = (path) => {
    handleMenuClose();
    navigate(path);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        color: "#333",
        boxShadow: 0,
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar
        sx={{
          height: 70,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxHeight: "100%",
            marginLeft: 10,
          }}
        >
          <Logo style={{ maxHeight: 50 }} />
        </Box>

        <Box sx={{ display: "flex", gap: 2, marginRight: 5 }}>
          <IconButton
            sx={{
              color: "#333",
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Notifications fontSize="medium" />
            <Box
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                width: 8,
                height: 8,
                backgroundColor: "#f44336",
                borderRadius: "50%",
              }}
            />
          </IconButton>

          <IconButton
            sx={{ color: "#E4405F", display: "flex", alignItems: "center" }}
            onClick={handleMenuOpen}
          >
            <Avatar src={avatar} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              elevation: 3,
              sx: { borderRadius: 2, minWidth: 200 },
            }}
          >
            <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar src={avatar} sx={{ width: 40, height: 40 }} />
              <Box>
                <Box sx={{ fontWeight: 600 }}>
                  {user.role === "CANDIDATE"
                    ? `${user.candidate_profile.first_name} ${user.candidate_profile.last_name}`
                    : user.role === "EMPLOYER"
                    ? user.employer_profile.name
                    : "Unknown User"}
                </Box>
                <Box sx={{ fontSize: 12, color: "gray" }}>{user.email}</Box>
                <Box sx={{ fontSize: 11, color: "gray" }}>{user.role}</Box>
              </Box>
            </Box>

            <Divider />
            <MenuItem onClick={() => handleNavigate(`/dashboard`)}>
              <ListItemIcon>
                <Dashboard fontSize="small" />
              </ListItemIcon>
              Dashboard
            </MenuItem>

            <MenuItem onClick={() => handleNavigate(`/dashboard/settings`)}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>

            <Divider />

            <MenuItem onClick={handleLogout} sx={{ color: "red" }}>
              <ListItemIcon>
                <ExitToApp fontSize="small" sx={{ color: "red" }} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
