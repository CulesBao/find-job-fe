import { Routes, Route } from "react-router-dom";
import Accountverify from "@/pages/Auth/AccountVerifyPage";
import AuthPage from "@/pages/Auth/AuthPage";
import ResetPassword from "@/pages/Auth/ResetPasswordPage";
import OAuth2RedirectHandler from "@/pages/Auth/OAuth2RedirectHandler";
function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<AuthPage />} />
      <Route path="register" element={<AuthPage />} />
      <Route path="verify/:id" element={<Accountverify />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="forgot-password" element={<AuthPage />} />
      <Route path="oauth2/redirect" element={<OAuth2RedirectHandler />} />
    </Routes>
  );
}

export default AuthRoutes;
