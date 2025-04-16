import Logo from "@/assets/Logo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Photo } from "@mui/icons-material";
import PublicIcon from "@mui/icons-material/Public";
import CandidateSettingHeader from "../../components/form/profile/CandidateSettingHeader";
import { Outlet } from "react-router-dom";

const tabData = [
  { label: "Profile", icon: <AccountCircleIcon />, path: "profile" },
  { label: "Avatar", icon: <Photo />, path: "avatar" },
  { label: "Social media", icon: <PublicIcon />, path: "social" },
];

const CandidateCreatePage = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Logo />
      <CandidateSettingHeader tabData={tabData} basePath="/candidate/set-up" />
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default CandidateCreatePage;
