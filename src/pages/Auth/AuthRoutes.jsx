import { Routes, Route } from "react-router-dom";
import Accountverify from "./AccountVerifyPage";
import AuthPage from "./AuthPage";
import ResetPassword from "./ResetPasswordPage";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<AuthPage />} />
      <Route path="register" element={<AuthPage />} />
      <Route path="verify/:id" element={<Accountverify />} />
      <Route path="reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default AuthRoutes;
