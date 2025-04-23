import Logo from "@/assets/Logo";
import TabSettingHeader from "@/components/layout/TabSettingHeader";
import { useAuth } from "@/hooks/useAuth";
import { AccountCircle, Business, Photo, Public } from "@mui/icons-material";
import { SettingsIcon } from "lucide-react";
import { Outlet } from "react-router-dom";

const UnifiedSetHeader = ({
  title,
  basePath,
  includeChangePassword = false,
}) => {
  const { user } = useAuth();

  const candidateTabData = [
    { label: "Profile", icon: <AccountCircle />, path: "profile" },
    { label: "Avatar", icon: <Photo />, path: "avatar" },
    { label: "Social Media", icon: <Public />, path: "social" },
    ...(includeChangePassword
      ? [
          {
            label: "Reset Password",
            icon: <SettingsIcon />,
            path: "change-password",
          },
        ]
      : []),
  ];

  // Tab data for Employer
  const employerTabData = [
    { label: "Company Profile", icon: <Business />, path: "profile" },
    { label: "Company Logo", icon: <Photo />, path: "logo" },
    { label: "Social Media", icon: <Public />, path: "social" },
    ...(includeChangePassword
      ? [
          {
            label: "Reset Password",
            icon: <SettingsIcon />,
            path: "change-password",
          },
        ]
      : []),
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}
      {basePath === "/set-up" && <Logo />}

      {user?.role === "CANDIDATE" ? (
        <TabSettingHeader tabData={candidateTabData} basePath={basePath} />
      ) : user?.role === "EMPLOYER" ? (
        <TabSettingHeader tabData={employerTabData} basePath={basePath} />
      ) : null}

      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default UnifiedSetHeader;
