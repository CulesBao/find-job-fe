import { Link, useLocation } from "react-router-dom";
import { Box, Divider, Tab, Tabs } from "@mui/material";

const TabSettingHeader = ({
  tabData,
  basePath,
  tabIndicatorColor = "#1976d2",
}) => {
  const location = useLocation();

  const pathSegment = location.pathname.replace(`${basePath}/`, "");
  const currentTab = tabData.findIndex((tab) => tab.path === pathSegment);

  const selectedTab = currentTab === -1 ? 0 : currentTab;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Tabs
          value={selectedTab}
          aria-label="settings tabs"
          variant="fullWidth"
          sx={{ maxWidth: 800, width: "100%" }}
          TabIndicatorProps={{
            style: {
              backgroundColor: tabIndicatorColor,
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
                minHeight: 48,
                color:
                  index === selectedTab ? tabIndicatorColor : "text.secondary",
                fontWeight: index === selectedTab ? 600 : 500,
                "&.Mui-selected": {
                  color: tabIndicatorColor,
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

export default TabSettingHeader;
