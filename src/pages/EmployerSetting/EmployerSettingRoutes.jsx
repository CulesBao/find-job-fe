import { Routes, Route, Navigate } from "react-router-dom";
import EmployerSettingLayout from "./EmployerSettingPage";
import BasicEmployerInfoPage from "../../components/form/profile/BasicEmployerInfoForm";
import AddSocialLink from "../../components/form/profile/AddSocialLinkForm";
import ChangePasswordPage from "../../components/form/profile/ChangePasswordForm";
import ChangeImagePage from "../../components/form/profile/ChangeImageForm";
import {
  updateEmployerProfile,
  updateEmployerProfileLogo,
} from "@/services/employerProfileService";
function EmployerSettingRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EmployerSettingLayout />}>
        <Route index element={<Navigate to="logo" replace />} />
        <Route
          path="logo"
          element={<ChangeImagePage fn={updateEmployerProfileLogo} />}
        />
        <Route
          path="profile"
          element={<BasicEmployerInfoPage fn={updateEmployerProfile} />}
        />
        <Route path="social" element={<AddSocialLink />} />
        <Route path="change-password" element={<ChangePasswordPage />} />
      </Route>
    </Routes>
  );
}

export default EmployerSettingRoutes;
