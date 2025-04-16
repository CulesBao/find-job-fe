import { Link, useLocation } from "react-router-dom";
import { Box, Divider, Tab, Tabs } from "@mui/material";

const CandidateSettingHeader = ({ tabData, basePath }) => {
  const location = useLocation();
  const pathSegment = location.pathname.split("/").pop();
  const currentTab = tabData.findIndex((tab) => tab.path === pathSegment);
  const selectedTab =
    currentTab === -1
      ? tabData.findIndex((tab) => tab.path === "profile")
      : currentTab;

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
              to={`${basePath}/${tab.path}`}
              sx={{
                textTransform: "none",
                minHeight: 48,
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
      </Box>

      <Divider />
    </Box>
  );
};

export default CandidateSettingHeader;
