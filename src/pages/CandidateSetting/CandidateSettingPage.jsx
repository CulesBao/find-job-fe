import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Photo } from "@mui/icons-material";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import CandidateSettingHeader from "../../components/form/profile/CandidateSettingHeader";
import { Outlet } from "react-router-dom";

const tabData = [
  { label: "Avatar", icon: <Photo />, path: "avatar" },
  { label: "Profile", icon: <AccountCircleIcon />, path: "profile" },
  { label: "Social media", icon: <PublicIcon />, path: "social" },
  { label: "Reset password", icon: <SettingsIcon />, path: "change-password" },
];

const CandidateSettingPage = () => {
  return (
    <>
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Setting</h1>
        <CandidateSettingHeader
          tabData={tabData}
          basePath="/dashboard/settings"
        />
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CandidateSettingPage;
