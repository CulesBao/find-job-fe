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
import SaveProfileCongrats from "./pages/Congratulation/SaveProfileCongrats";
import MainLayout from "./components/layout/MainLayout";
import AuthRedirect from "./hooks/AuthRedirect";
import DashboardRedirect from "./hooks/DashboardRedirect";
import PublicRoute from "./hooks/PublicRoute";

export default function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackbarUtilsConfigurator />
      <AuthProvider>
        <ProfileProvider>
          <Routes>
            <Route path="/" element={<AuthRedirect />} />
            <Route 
              path="/auth/*" 
              element={
                <PublicRoute>
                  <AuthRoutes />
                </PublicRoute>
              } 
            />
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
              path="/candidate/dashboard/settings/*"
              element={
                <MainLayout>
                  <PrivateRoute>
                    <CandidateProfileSettingRoutes />
                  </PrivateRoute>
                </MainLayout>
              }
            />
            <Route
              path="/employer/dashboard/settings/*"
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
            <Route 
              path="employer/dashboard" 
              element={
                <PrivateRoute>
                  <DashboardRedirect />
                </PrivateRoute>
              } 
            />
            <Route 
              path="candidate/dashboard" 
              element={
                <PrivateRoute>
                  <DashboardRedirect />
                </PrivateRoute>
              }
            />
            <Route 
              path="admin/dashboard" 
              element={
                <PrivateRoute>
                  <DashboardRedirect />
                </PrivateRoute>
              }
            />
          </Routes>
        </ProfileProvider>
      </AuthProvider>
    </SnackbarProvider>
  );
}
