import { Routes, Route, Navigate } from "react-router-dom";
import CandidateCreateLayout from "./CandidateCreatePage";
import BasicCandidateInfoForm from "../../components/form/profile/BasicCandidateInfoForm";
import AddSocialLink from "../../components/form/profile/AddSocialLinkForm";
import ChangeImagePage from "../../components/form/profile/ChangeImageForm";
import {
  createCandidateProfile,
  updateCandidateProfileAvatar,
  updateSocialLinks,
} from "@/services/candidateProfileService";

function CandidateCreateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CandidateCreateLayout />}>
        <Route index element={<Navigate to="profile" replace />} />
        <Route
          path="profile"
          element={<BasicCandidateInfoForm fn={createCandidateProfile} />}
        />
        <Route
          path="social"
          element={<AddSocialLink fn={updateSocialLinks} />}
        />
        <Route
          path="avatar"
          element={<ChangeImagePage fn={updateCandidateProfileAvatar} />}
        />
      </Route>
    </Routes>
  );
}

export default CandidateCreateRoutes;
