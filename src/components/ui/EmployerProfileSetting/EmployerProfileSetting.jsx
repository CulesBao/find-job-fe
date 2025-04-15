import { Outlet, Link, useLocation } from "react-router-dom";
import BusinessIcon from "@mui/icons-material/Business";
import InfoIcon from "@mui/icons-material/Info";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";

const tabData = [
  { label: "Company Info", icon: <BusinessIcon />, path: "company-info" },
  { label: "Employer Profile", icon: <InfoIcon />, path: "profile" },
  { label: "Social Media Profile", icon: <PublicIcon />, path: "social-media" },
  { label: "Account Setting", icon: <SettingsIcon />, path: "account-setting" },
];

const EmployerProfileSetting = () => {
  const location = useLocation();

  const pathSegment = location.pathname.split("/").pop();
  const currentTab = tabData.findIndex((tab) => tab.path === pathSegment);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Typography variant="h4" color="text.primary" sx={{ fontWeight: "bold" }}>
        Employer Settings
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Tabs
          value={currentTab !== -1 ? currentTab : 0}
          aria-label="employer settings tabs"
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
              to={tab.path} // Trỏ đến route con
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

      {/* Hiển thị nội dung của route con */}
      <Box sx={{ mt: 4 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default EmployerProfileSetting;