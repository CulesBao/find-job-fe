import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Constructions from "./pages/Constructions";
import Accountverify from "./pages/AccountVerify";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utils/SnackbarUtils";
import { AuthProvider } from "./hooks/AuthProvider";
import ForgotPassword from "./pages/ForgotPassword";
import AuthRedirect from "./hooks/AuthRedirect";
import PrivateRoute from "./hooks/PrivateRoute";
import ProfileSetting from "./components/ui/CandidateProfileSetting/CandidateProfileSetting";
import BasicCandidateProfile from "./components/ui/CandidateProfileSetting/BasicCandidateProfilePage";
import AddSocialLink from "./components/layout/AddSocialLink";

export default function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackbarUtilsConfigurator />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<AuthRedirect />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/constructions"
              element={
                <PrivateRoute>
                  <Constructions />
                </PrivateRoute>
              }
            />
            <Route path="/verify/:id" element={<Accountverify />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/settings" element={<ProfileSetting />}>
              <Route index element={<Navigate to="profile" replace />} />
              <Route path="profile" element={<BasicCandidateProfile />} />
              <Route path="social" element={<AddSocialLink />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </SnackbarProvider>
  );
}
