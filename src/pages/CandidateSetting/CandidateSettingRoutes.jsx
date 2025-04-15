import { Routes, Route } from "react-router-dom";
import AddSocialLink from "../shared/AddSocialLinkPage";
import BasicCandidateProfilePage from "./BasicCandidateInfoPage";
import CandidateProfileSettingHeader from "./CandidateSettingHeader";
import AvatarCandidatePage from "./AvatarCandidatePage";
import ChangePasswordPage from "./ChangePasswordPage";

function CandidateSettingRoutes() {
  return (
    <Routes>
      <Route path="settings" element={<CandidateProfileSettingHeader />}>
        <Route index element={<BasicCandidateProfilePage />} />
        <Route path="profile" element={<BasicCandidateProfilePage />} />
        <Route path="social" element={<AddSocialLink />} />
        <Route path="avatar" element={<AvatarCandidatePage />} />
        <Route path="change-password" element={<ChangePasswordPage />} />
      </Route>
    </Routes>
  );
}

export default CandidateSettingRoutes;
