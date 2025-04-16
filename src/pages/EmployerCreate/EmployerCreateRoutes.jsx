import { Routes, Route, Navigate } from "react-router-dom";
import EmployerCreateLayout from "./EmployerCreatePage";
import BasicEmployerInfoPage from "../../components/form/profile/BasicEmployerInfoForm";
import AddSocialLink from "../../components/form/profile/AddSocialLinkForm";
import ChangeImagePage from "../../components/form/profile/ChangeImageForm";
import {
  createEmployerProfile,
  updateEmployerLogo,
  updateSocialLinks,
} from "@/services/employerProfileService";
function EmployerCreateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EmployerCreateLayout />}>
        <Route index element={<Navigate to="profile" replace />} />
        <Route
          path="profile"
          element={<BasicEmployerInfoPage fn={createEmployerProfile} />}
        />
        <Route
          path="social"
          element={<AddSocialLink fn={updateSocialLinks} />}
        />
        <Route
          path="logo"
          element={<ChangeImagePage fn={updateEmployerLogo} />}
        />
      </Route>
    </Routes>
  );
}

export default EmployerCreateRoutes;
