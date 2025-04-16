import { Routes, Route } from "react-router-dom";
import EmployerSettingLayout from "./EmployerSettingPage";
import BasicEmployerInfoPage from "../../components/form/profile/BasicEmployerInfoForm";
import AddSocialLink from "../../components/form/profile/AddSocialLinkForm";
import ChangePasswordPage from "../../components/form/profile/ChangePasswordForm";
import ChangeImagePage from "../../components/form/profile/ChangeImageForm";

function EmployerSettingRoutes() {
  return (
    <Routes>
      <Route path="settings" element={<EmployerSettingLayout />}>
        <Route path="logo" element={<ChangeImagePage />} />
        <Route path="profile" element={<BasicEmployerInfoPage />} />
        <Route path="social" element={<AddSocialLink />} />
        <Route path="change-password" element={<ChangePasswordPage />} />
      </Route>
    </Routes>
  );
}

export default EmployerSettingRoutes;
