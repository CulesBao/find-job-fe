import { Routes, Route, Navigate } from "react-router-dom";
import CandidateSettingLayout from "./CandidateSettingPage";
import BasicCandidateInfoForm from "../../components/form/profile/BasicCandidateInfoForm";
import AddSocialLink from "../../components/form/profile/AddSocialLinkForm";
import ChangeImageForm from "../../components/form/profile/ChangeImageForm";
import ChangePasswordForm from "../../components/form/profile/ChangePasswordForm";

function CandidateSettingRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CandidateSettingLayout />}>
        <Route index element={<Navigate to="avatar" replace />} />
        <Route path="profile" element={<BasicCandidateInfoForm />} />
        <Route path="social" element={<AddSocialLink />} />
        <Route path="avatar" element={<ChangeImageForm />} />
        <Route path="change-password" element={<ChangePasswordForm />} />
      </Route>
    </Routes>
  );
}

export default CandidateSettingRoutes;
