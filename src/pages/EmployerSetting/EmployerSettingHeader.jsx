import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CorporateFareIcon from "@mui/icons-material/CorporateFare"; // Biểu tượng mới cho Founding Info
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";

const EmployerFrame = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab
          icon={<PersonIcon />}
          label="Company Info"
          sx={{
            textTransform: "none",
            fontWeight: selectedTab === 0 ? "bold" : "normal",
            color: selectedTab === 0 ? "#1976d2" : "inherit",
          }}
        />
        <Tab
          icon={<CorporateFareIcon />}
          label="Founding Info"
          sx={{
            textTransform: "none",
            fontWeight: selectedTab === 1 ? "bold" : "normal",
            color: selectedTab === 1 ? "#1976d2" : "inherit",
          }}
        />
        <Tab
          icon={<PublicIcon />}
          label="Social Media Profile"
          sx={{
            textTransform: "none",
            fontWeight: selectedTab === 2 ? "bold" : "normal",
            color: selectedTab === 2 ? "#1976d2" : "inherit",
          }}
        />
        <Tab
          icon={<SettingsIcon />}
          label="Account Setting"
          sx={{
            textTransform: "none",
            fontWeight: selectedTab === 3 ? "bold" : "normal",
            color: selectedTab === 3 ? "#1976d2" : "inherit",
          }}
        />
      </Tabs>
    </Box>
  );
};

export default EmployerFrame;
