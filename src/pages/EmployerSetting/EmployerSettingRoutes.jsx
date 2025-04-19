import { Routes, Route, Navigate } from "react-router-dom";
import EmployerSettingLayout from "./EmployerSettingPage";
import BasicEmployerInfoPage from "../../components/form/profile/BasicEmployerInfoForm";
import AddSocialLink from "../../components/form/profile/AddSocialLinkForm";
import ChangePasswordPage from "../../components/form/profile/ChangePasswordForm";
import ChangeImagePage from "../../components/form/profile/ChangeImageForm";
import {
  updateEmployerLogo,
  updateEmployerProfile,
  updateSocialLinks,
} from "@/services/employerProfileService";
import { resetPassword } from "@/services/accountService";
function EmployerSettingRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EmployerSettingLayout />}>
        <Route index element={<Navigate to="logo" replace />} />
        <Route
          path="logo"
          element={<ChangeImagePage fn={updateEmployerLogo} />}
        />
        <Route
          path="profile"
          element={<BasicEmployerInfoPage fn={updateEmployerProfile} />}
        />
        <Route
          path="social"
          element={<AddSocialLink fn={updateSocialLinks} />}
        />
        <Route
          path="change-password"
          element={<ChangePasswordPage fn={resetPassword} />}
        />
      </Route>
    </Routes>
  );
}

export default EmployerSettingRoutes;
