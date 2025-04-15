import { Routes, Route } from "react-router-dom";
import AddSocialLink from "../shared/AddSocialLinkPage";
import BasicCandidateProfilePage from "./BasicCandidateInfoPage";
import CandidateProfileSettingHeader from "./CandidateSettingHeader";

function CandidateSettingRoutes() {
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

export default CandidateSettingRoutes;
