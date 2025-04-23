import { Routes, Route } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  updateCandidateProfile,
  updateCandidateProfileAvatar,
  updateSocialLinks as updateCandidateSocialLinks,
} from "@/services/candidateProfileService";
import {
  updateEmployerProfile,
  updateEmployerLogo,
  updateSocialLinks as updateEmployerSocialLinks,
} from "@/services/employerProfileService";
import { resetPassword } from "@/services/accountService";
import ChangeImageForm from "@/components/form/profile/ChangeImageForm";
import BasicCandidateInfoForm from "@/components/form/profile/BasicCandidateInfoForm";
import AddSocialLinkForm from "@/components/form/profile/AddSocialLinkForm";
import ChangePasswordForm from "@/components/form/profile/ChangePasswordForm";
import BasicEmployerInfoForm from "@/components/form/profile/BasicEmployerInfoForm";
import UnifiedSetHeader from "@/pages/Setup/UnifiedSetHeader";

export default function SettingRoutes() {
  const { user } = useAuth();

  const routesByRole = {
    CANDIDATE: [
      {
        path: "avatar",
        element: <ChangeImageForm fn={updateCandidateProfileAvatar} />,
        title: "Change Avatar",
      },
      {
        path: "profile",
        element: <BasicCandidateInfoForm fn={updateCandidateProfile} />,
        title: "Profile",
      },
      {
        path: "social",
        element: <AddSocialLinkForm fn={updateCandidateSocialLinks} />,
        title: "Social Links",
      },
      {
        path: "change-password",
        element: <ChangePasswordForm fn={resetPassword} />,
        title: "Change Password",
      },
    ],
    EMPLOYER: [
      {
        path: "logo",
        element: <ChangeImageForm fn={updateEmployerLogo} />,
        title: "Change Logo",
      },
      {
        path: "profile",
        element: <BasicEmployerInfoForm fn={updateEmployerProfile} />,
        title: "Profile",
      },
      {
        path: "social",
        element: <AddSocialLinkForm fn={updateEmployerSocialLinks} />,
        title: "Social Links",
      },
      {
        path: "change-password",
        element: <ChangePasswordForm fn={resetPassword} />,
        title: "Change Password",
      },
    ],
  };

  const roleRoutes = routesByRole[user?.role] || [];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <UnifiedSetHeader
            title="Settings"
            basePath="/dashboard/settings"
            includeChangePassword={true}
          />
        }
      >
        {roleRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}
