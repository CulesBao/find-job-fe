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
import { ProfileProvider } from "./components/context/ProfileContext";
import AuthPage from "./pages/Auth/AuthPage";
import SaveProfileCongrats from "./pages/Congratulation/SaveProfileCongrats";
import MainLayout from "./components/layout/MainLayout";

export default function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackbarUtilsConfigurator />
      <AuthProvider>
        <ProfileProvider>
          <Routes>
            <Route path="/" element={<AuthPage />} />
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
              path="/employer/set-up/*"
              element={
                <PrivateRoute>
                  <EmployerCreateRoutes />
                </PrivateRoute>
              }
            />

            <Route
              path="/candidate/settings/*"
              element={
                <MainLayout>
                  <PrivateRoute>
                    <CandidateProfileSettingRoutes />
                  </PrivateRoute>
                </MainLayout>
              }
            />
            <Route
              path="/employer/settings/*"
              element={
                <MainLayout>
                  <PrivateRoute>
                    <EmployerSettingRoutes />
                  </PrivateRoute>
                </MainLayout>
              }
            />
            <Route
              path="/congrats"
              element={
                <MainLayout>
                  <PrivateRoute>
                    <SaveProfileCongrats />
                  </PrivateRoute>
                </MainLayout>
              }
            />
          </Routes>
        </ProfileProvider>
      </AuthProvider>
    </SnackbarProvider>
  );
}
