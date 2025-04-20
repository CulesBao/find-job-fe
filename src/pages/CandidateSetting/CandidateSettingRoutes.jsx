import { Routes, Route, Navigate } from "react-router-dom";
import CandidateSettingLayout from "./CandidateSettingPage";
import BasicCandidateInfoForm from "../../components/form/profile/BasicCandidateInfoForm";
import AddSocialLink from "../../components/form/profile/AddSocialLinkForm";
import ChangeImageForm from "../../components/form/profile/ChangeImageForm";
import ChangePasswordForm from "../../components/form/profile/ChangePasswordForm";
import {
  updateCandidateProfile,
  updateCandidateProfileAvatar,
  updateSocialLinks,
} from "@/services/candidateProfileService";
import { resetPassword } from "@/services/accountService";

function CandidateSettingRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CandidateSettingLayout />}>
        <Route index element={<Navigate to="avatar" replace />} />
        <Route
          path="avatar"
          element={<ChangeImageForm fn={updateCandidateProfileAvatar} />}
        />
        <Route
          path="profile"
          element={<BasicCandidateInfoForm fn={updateCandidateProfile} />}
        />
        <Route
          path="social"
          element={<AddSocialLink fn={updateSocialLinks} />}
        />
        <Route
          path="change-password"
          element={<ChangePasswordForm fn={resetPassword} />}
        />
      </Route>
    </Routes>
  );
}

export default CandidateSettingRoutes;
