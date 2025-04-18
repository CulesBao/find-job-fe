import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utils/SnackbarUtils";
import { AuthProvider } from "./hooks/AuthProvider";
import AuthRoutes from "./pages/auth/AuthRoutes";
import CandidateProfileSettingRoutes from "./pages/CandidateSetting/CandidateSettingRoutes";
import PrivateRoute from "./hooks/PrivateRoute";
import EmployerSettingRoutes from "./pages/EmployerSetting/EmployerSettingRoutes";
import CandidateCreateRoutes from "./pages/CandidateCreate/CandidateCreateRoutes";
import EmployerCreateRoutes from "./pages/EmployerCreate/EmployerCreateRoutes";
import { ProfileProvider } from "./context/ProfileContext";

export default function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackbarUtilsConfigurator />
      <AuthProvider>
        <ProfileProvider>
          <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route
              path="/candidate/set-up/*"
              element={
                <PrivateRoute>
                  <CandidateCreateRoutes />
                </PrivateRoute>
              }
            />
            <Route
              path="/candidate/settings/*"
              element={
                <PrivateRoute>
                  <CandidateProfileSettingRoutes />
                </PrivateRoute>
              }
            />
            <Route
              path="/employer/settings/*"
              element={
                <PrivateRoute>
                  <EmployerSettingRoutes />
                </PrivateRoute>
              }
            />
            <Route
              path="/employer/set-up/*"
              element={
                <PrivateRoute>
                  <EmployerCreateRoutes />
                </PrivateRoute>
              }
            />
          </Routes>
        </ProfileProvider>
      </AuthProvider>
    </SnackbarProvider>
  );
}
