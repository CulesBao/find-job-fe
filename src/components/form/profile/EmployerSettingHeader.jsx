import { Link, useLocation } from "react-router-dom";
import { Box, Divider, Tab, Tabs } from "@mui/material";

const EmployerSettingHeader = ({tabData ,basePath}) => {
  const location = useLocation();
  const pathSegment = location.pathname.split("/").pop();
  const currentTab = tabData.findIndex((tab) => tab.path === pathSegment);
  const selectedTab =
    currentTab === -1
      ? tabData.findIndex((tab) => tab.path === "company-info")
      : currentTab;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Tabs
          value={selectedTab}
          variant="fullWidth"
          aria-label="employer setting tabs"
          sx={{ maxWidth: 800, width: "100%" }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#1976d2",
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
              to={`${basePath}/${tab.path}`}
              sx={{
                textTransform: "none",
                minHeight: 44,
                color: index === selectedTab ? "#1976d2" : "text.secondary",
                fontWeight: index === selectedTab ? 600 : 500,
                "&.Mui-selected": {
                  color: "#1976d2",
                  backgroundColor: "rgba(245, 245, 245, 1)",
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Divider />
    </Box>
  );
};

export default EmployerSettingHeader;
