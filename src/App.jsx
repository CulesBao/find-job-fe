import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utils/SnackbarUtils";
import { AuthProvider } from "./hooks/AuthProvider";

import AuthRoutes from "./pages/auth/AuthRoutes";
import CandidateCreateRoutes from "./pages/CandidateCreate/CandidateCreateRoutes";
import EmployerCreateRoutes from "./pages/EmployerCreate/EmployerCreateRoutes";
import CandidateProfileSettingRoutes from "./pages/CandidateSetting/CandidateSettingRoutes";
import EmployerSettingRoutes from "./pages/EmployerSetting/EmployerSettingRoutes";

import SaveProfileCongrats from "./pages/Congratulation/SaveProfileCongrats";

import MainLayout from "./components/layout/MainLayout";
import PrivateRoute from "./hooks/PrivateRoute";
import PublicRoute from "./hooks/PublicRoute";
import AuthRedirect from "./hooks/AuthRedirect";
import DashboardRedirect from "./hooks/DashboardRedirect";
import RoleBasedRoute from "./hooks/RoleBasedRoute";

// TESTTTTTTTTTTTTTTTTTTTTTTTT
import EmployerMyJobs from "./pages/EmployerMyJobs/EmployerMyJobs";
import EmployerPostJob from "./pages/EmployerPostJob/EmployerPostJob";
import EmployerSavedCdd from "./pages/EmployerSavedCdd/EmployerSavedCdd";
import CandidateAppliedJobs from "./pages/CandidateAppliedJobs/CandidateAppliedJobs";
import CandidateFavoriteJob from "./pages/CandidateFavoriteJob/CandidateFavoriteJob";
import CandidateJobAlert from "./pages/CandidateJobAlert/CandidateJobAlert";
import { ProfileProvider } from "./context/ProfileContext";
import FilterJob from "./pages/FindJob/FilterJob";

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

            <Route
              path="/candidate/dashboard/settings/*"
              element={
                <MainLayout>
                    <RoleBasedRoute allowedRoles={["candidate"]}>
                      <CandidateProfileSettingRoutes />
                    </RoleBasedRoute>
                </MainLayout>
              }
            />

            <Route
              path="/employer/dashboard/settings/*"
              element={
                <MainLayout>
                    <RoleBasedRoute allowedRoles={["employer"]}>
                      <EmployerSettingRoutes />
                    </RoleBasedRoute>
                </MainLayout>
              }
            />

            <Route
              path="/congrats"
              element={
                  <SaveProfileCongrats />
              }
            />

            <Route
              path="/dashboard"
              element={
                  <DashboardRedirect />
              }
            />

            <Route
              path="/employer/dashboard/*"
              element={
                  <RoleBasedRoute allowedRoles={["employer"]}>
                    <DashboardRedirect />
                  </RoleBasedRoute>
              }
            />

            <Route
              path="/candidate/dashboard/*"
              element={
                  <RoleBasedRoute allowedRoles={["candidate"]}>
                    <DashboardRedirect />
                  </RoleBasedRoute>
              }
            />

            <Route
              path="/admin/dashboard/*"
              element={
                  <RoleBasedRoute allowedRoles={["admin"]}>
                    <DashboardRedirect />
                  </RoleBasedRoute>
              }
            />

            {/* CAC TRANG NAY DE TEST */}
            <Route
              path="employer/dashboard/my-job"
              element={
                <MainLayout>
                    <RoleBasedRoute allowedRoles={["employer"]}>
                      <EmployerMyJobs />
                    </RoleBasedRoute>
                </MainLayout>
              }
            />
            <Route
              path="employer/dashboard/post-job"
              element={
                <MainLayout>
                    <RoleBasedRoute allowedRoles={["employer"]}>
                      <EmployerPostJob />
                    </RoleBasedRoute>
                </MainLayout>
              }
            />
            <Route
              path="employer/dashboard/saved-candidate"
              element={
                <MainLayout>
                    <RoleBasedRoute allowedRoles={["employer"]}>
                      <EmployerSavedCdd />
                    </RoleBasedRoute>
                </MainLayout>
              }
            />
            <Route
              path="candidate/dashboard/applied-jobs"
              element={
                <MainLayout>
                    <RoleBasedRoute allowedRoles={["candidate"]}>
                      <CandidateAppliedJobs />
                    </RoleBasedRoute>
                </MainLayout>
              }
            />
            <Route
              path="candidate/dashboard/favorite-jobs"
              element={
                <MainLayout>
                    <RoleBasedRoute allowedRoles={["candidate"]}>
                      <CandidateFavoriteJob />
                    </RoleBasedRoute>
                </MainLayout>
              }
            />
            <Route
              path="candidate/dashboard/job-alert"
              element={
                <MainLayout>
                    <RoleBasedRoute allowedRoles={["candidate"]}>
                      <CandidateJobAlert />
                    </RoleBasedRoute>
                </MainLayout>
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

            {/* CAC TRANG TREN DE TEST */}
          </Routes>
        </ProfileProvider>
      </AuthProvider>
    </SnackbarProvider>
  );
}
