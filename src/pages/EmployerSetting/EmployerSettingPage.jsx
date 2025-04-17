import EmployerSettingHeader from "../../components/form/profile/EmployerSettingHeader";
import { Outlet } from "react-router-dom";
import { Business, Photo, Settings } from "@mui/icons-material";
import PublicIcon from "@mui/icons-material/Public";
import Navigation from "@/components/layout/Navigation";

const tabData = [
  { label: "Company Logo", icon: <Photo />, path: "logo" },
  { label: "Company Profile", icon: <Business />, path: "profile" },
  { label: "Social Media", icon: <PublicIcon />, path: "social" },
  { label: "Change Password", icon: <Settings />, path: "change-password" },
];

const EmployerSettingPage = () => {
  return (
    <>
    <Navigation />
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Setting</h1>
      <EmployerSettingHeader tabData={tabData} basePath="/employer/settings"/>
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default EmployerSettingPage;
