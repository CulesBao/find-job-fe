import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utils/SnackbarUtils";
import { AuthProvider } from "./hooks/AuthProvider";
import AuthRoutes from "./pages/auth/AuthRoutes";
import CandidateCreateRoutes from "./pages/CandidateCreate/CandidateCreateRoutes";
import EmployerCreateRoutes from "./pages/EmployerCreate/EmployerCreateRoutes";
import SaveProfileCongrats from "./pages/Congratulation/SaveProfileCongrats";
import MainLayout from "./components/layout/MainLayout";
import PublicRoute from "./hooks/PublicRoute";
import AuthRedirect from "./hooks/AuthRedirect";
import RoleBasedRoute from "./hooks/RoleBasedRoute";

import { ProfileProvider } from "./context/ProfileContext";
import FilterJob from "./pages/FindJob/FilterJob";
import DashboardRoutes from "./routes/DashboardRoutes";

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
                <RoleBasedRoute allowedRoles={["candidate"]}>
                  <CandidateCreateRoutes />
                </RoleBasedRoute>
              }
            />
            <Route
              path="/employer/set-up/*"
              element={
                <RoleBasedRoute allowedRoles={["employer"]}>
                  <EmployerCreateRoutes />
                </RoleBasedRoute>
              }
            />
            <Route path="/congrats" element={<SaveProfileCongrats />} />
            <Route
              path="/dashboard/*"
              element={
                <RoleBasedRoute allowedRoles={["candidate", "employer"]}>
                  <DashboardRoutes />
                </RoleBasedRoute>
              }
            />

            <Route
              path="employer/find-job"
              element={
                <MainLayout>
                  <RoleBasedRoute allowedRoles={["employer"]}>
                    <FilterJob />
                  </RoleBasedRoute>
                </MainLayout>
              }
            />
          </Routes>
        </ProfileProvider>
      </AuthProvider>
    </SnackbarProvider>
  );
}
