import Logo from "@/assets/Logo";
import { Business, Photo } from "@mui/icons-material";
import PublicIcon from "@mui/icons-material/Public";
import EmployerSettingHeader from "../../components/form/profile/EmployerSettingHeader";
import { Outlet } from "react-router-dom";

const tabData = [
  { label: "Company Profile", icon: <Business />, path: "profile" },
  { label: "Company Logo", icon: <Photo />, path: "logo" },
  { label: "Social Media", icon: <PublicIcon />, path: "social" },
];

const EmployerCreatePage = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Logo />
      <EmployerSettingHeader tabData={tabData} basePath="/employer/set-up" />
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default EmployerCreatePage;
