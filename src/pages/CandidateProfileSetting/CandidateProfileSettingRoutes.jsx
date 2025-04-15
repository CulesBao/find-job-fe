import { Routes, Route } from "react-router-dom";
import AddSocialLink from "../shared/AddSocialLinkPage";
import BasicCandidateProfilePage from "./BasicCandidateProfilePage";
import CandidateProfileSettingHeader from "./CandidateProfileSettingHeader";

function CandidateProfileSettingRoutes() {
  return (
    <Routes>
      <Route path="settings" element={<CandidateProfileSettingHeader />}>
        <Route index element={<BasicCandidateProfilePage />} />
        <Route path="profile" element={<BasicCandidateProfilePage />} />
        <Route path="social" element={<AddSocialLink />} />
      </Route>
    </Routes>
  );
}

export default CandidateProfileSettingRoutes;
