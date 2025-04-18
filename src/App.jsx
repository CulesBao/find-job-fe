import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utils/SnackbarUtils";
import { AuthProvider } from "./hooks/AuthProvider";
import { ProfileProvider } from "./components/context/ProfileContext";

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
                  <RoleBasedRoute allowedRoles={['candidate']}>
                    <CandidateCreateRoutes />
                  </RoleBasedRoute>
                </PrivateRoute>
              }
            />

            <Route
              path="/employer/set-up/*"
              element={
                <PrivateRoute>
                  <RoleBasedRoute allowedRoles={['employer']}>
                    <EmployerCreateRoutes />
                  </RoleBasedRoute>
                </PrivateRoute>
              }
            />

            <Route
              path="/candidate/dashboard/settings/*"
              element={
                <MainLayout>
                  <PrivateRoute>
                    <RoleBasedRoute allowedRoles={['candidate']}>
                      <CandidateProfileSettingRoutes />
                    </RoleBasedRoute>
                  </PrivateRoute>
                </MainLayout>
              }
            />

            <Route
              path="/employer/dashboard/settings/*"
              element={
                <MainLayout>
                  <PrivateRoute>
                    <RoleBasedRoute allowedRoles={['employer']}>
                      <EmployerSettingRoutes />
                    </RoleBasedRoute>
                  </PrivateRoute>
                </MainLayout>
              }
            />

            <Route
              path="/congrats"
              element={
                <PrivateRoute>
                  <SaveProfileCongrats />
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardRedirect />
                </PrivateRoute>
              }
            />

            <Route
              path="/employer/dashboard/*"
              element={
                <PrivateRoute>
                  <RoleBasedRoute allowedRoles={['employer']}>
                    <DashboardRedirect />
                  </RoleBasedRoute>
                </PrivateRoute>
              }
            />

            <Route
              path="/candidate/dashboard/*"
              element={
                <PrivateRoute>
                  <RoleBasedRoute allowedRoles={['candidate']}>
                    <DashboardRedirect />
                  </RoleBasedRoute>
                </PrivateRoute>
              }
            />

            <Route
              path="/admin/dashboard/*"
              element={
                <PrivateRoute>
                  <RoleBasedRoute allowedRoles={['admin']}>
                    <DashboardRedirect />
                  </RoleBasedRoute>
                </PrivateRoute>
              }
            />


            {/* CAC TRANG NAY DE TEST */}
            <Route
              path="employer/dashboard/my-job"
              element={
                <MainLayout>
                  <PrivateRoute>
                    <RoleBasedRoute allowedRoles={['employer']}>
                      <EmployerMyJobs />
                    </RoleBasedRoute>
                  </PrivateRoute>
                </MainLayout>
              }
            />
            <Route
              path="employer/dashboard/post-job"
              element={
                <MainLayout>
                  <PrivateRoute>
                    <RoleBasedRoute allowedRoles={['employer']}>
                      <EmployerPostJob />
                    </RoleBasedRoute>
                  </PrivateRoute>
                </MainLayout>
              }
            />
            <Route
              path="employer/dashboard/saved-candidate"
              element={
                <MainLayout>
                  <PrivateRoute>
                    <RoleBasedRoute allowedRoles={['employer']}>
                      <EmployerSavedCdd />
                    </RoleBasedRoute>
                  </PrivateRoute>
                </MainLayout>
              }
            />
            <Route
              path="candidate/dashboard/applied-jobs"
              element={
                <MainLayout>
                  <PrivateRoute>
                    <RoleBasedRoute allowedRoles={['candidate']}>
                      <CandidateAppliedJobs />
                    </RoleBasedRoute>
                  </PrivateRoute>
                </MainLayout>
              }
            />
            <Route
              path="candidate/dashboard/favorite-jobs"
              element={
                <MainLayout>
                  <PrivateRoute>
                    <RoleBasedRoute allowedRoles={['candidate']}>
                      <CandidateFavoriteJob />
                    </RoleBasedRoute>
                  </PrivateRoute>
                </MainLayout>
              }
            />
            <Route
              path="candidate/dashboard/job-alert"
              element={
                <MainLayout>
                  <PrivateRoute>
                    <RoleBasedRoute allowedRoles={['candidate']}>
                      <CandidateJobAlert />
                    </RoleBasedRoute>
                  </PrivateRoute>
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
