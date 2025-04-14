import { Outlet, Link, useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Box, Divider, Tab, Tabs, Typography } from "@mui/material";

const tabData = [
  { label: "Avatar", icon: <Avatar />, path: "avatar" },
  { label: "Profile", icon: <AccountCircleIcon />, path: "profile" },
  { label: "Social links", icon: <PublicIcon />, path: "social" },
  { label: "Reset password", icon: <SettingsIcon />, path: "reset-password" },
];

const ProfileSetting = () => {
  const location = useLocation();

  const pathSegment = location.pathname.split("/").pop();
  const currentTab = tabData.findIndex((tab) => tab.path === pathSegment);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Typography variant="h4" color="text.primary" sx={{ fontWeight: "bold" }}>
        Settings
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Tabs
          value={currentTab !== -1 ? currentTab : 0}
          aria-label="settings tabs"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#0a65cc",
              height: 2,
            },
          }}
        >
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              icon={tab.icon}
              label={tab.label}
              component={Link}
              to={`/settings/${tab.path}`}
              sx={{
                textTransform: "none",
                minHeight: 48,
                padding: "6px 20px",
                color: index === currentTab ? "#0a65cc" : "text.secondary",
                fontWeight: index === currentTab ? 600 : 500,
                "&.Mui-selected": {
                  color: "#0a65cc",
                  backgroundColor: "rgba(245, 245, 245, 1)",
                },
              }}
            />
          ))}
        </Tabs>
        <Divider />
      </Box>

      <Box sx={{ mt: 4 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default ProfileSetting;
