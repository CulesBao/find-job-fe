import AddSocialLinkForm from "@/components/form/profile/AddSocialLinkForm";
import BaiscCandidateInfoForm from "@/components/form/profile/BasicCandidateInfoForm";
import BasicEmployerInfoForm from "@/components/form/profile/BasicEmployerInfoForm";
import ChangeImageForm from "@/components/form/profile/ChangeImageForm";
import { useAuth } from "@/hooks/useAuth";
import UnifiedSetHeader from "@/pages/Setup/UnifiedSetHeader";
import {
  createCandidateProfile,
  updateCandidateProfileAvatar,
  updateSocialLinks,
} from "@/services/candidateProfileService";
import {
  createEmployerProfile,
  updateEmployerLogo,
  updateEmployerSocialLinks,
} from "@/services/employerProfileService";
import { Routes, Route } from "react-router-dom";

export default function SetupRoutes() {
  const { user } = useAuth();

  const candidateRoutes = [
    {
      path: "profile",
      element: <BaiscCandidateInfoForm fn={createCandidateProfile} />,
      title: "Profile",
    },
    {
      path: "social",
      element: <AddSocialLinkForm fn={updateSocialLinks} />,
      title: "Social Links",
    },
    {
      path: "avatar",
      element: <ChangeImageForm fn={updateCandidateProfileAvatar} />,
      title: "Change Avatar",
    },
  ];

  const employerRoutes = [
    {
      path: "profile",
      element: <BasicEmployerInfoForm fn={createEmployerProfile} />,
      title: "Profile",
    },
    {
      path: "social",
      element: <AddSocialLinkForm fn={updateEmployerSocialLinks} />,
      title: "Social Links",
    },
    {
      path: "logo",
      element: <ChangeImageForm fn={updateEmployerLogo} />,
      title: "Change Logo",
    },
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={<UnifiedSetHeader title={null} basePath={"/set-up"} />}
      >
        {user?.role === "CANDIDATE" &&
          candidateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        {user?.role === "EMPLOYER" &&
          employerRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
      </Route>
    </Routes>
  );
}
