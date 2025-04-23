import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utils/SnackbarUtils";
import { AuthProvider } from "./hooks/AuthProvider";
import AuthRoutes from "./pages/auth/AuthRoutes";
import SaveProfileCongrats from "./pages/Congratulation/SaveProfileCongrats";
import PublicRoute from "./hooks/PublicRoute";
import AuthRedirect from "./hooks/AuthRedirect";
import RoleBasedRoute from "./hooks/RoleBasedRoute";
import { ProfileProvider } from "./context/ProfileContext";
import DashboardRoutes from "./routes/DashboardRoutes";
import { JobRoutes } from "./routes/JobRoutes";
import CandidateRoutes from "./routes/CandidateRoutes";
import EmployerRoutes from "./routes/EmployerRoutes";
import SetupRoutes from "./routes/SetupRoutes";

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
            <Route path="/set-up/*" element={<SetupRoutes />} />
            <Route path="/congrats" element={<SaveProfileCongrats />} />
            <Route
              path="/dashboard/*"
              element={
                <RoleBasedRoute allowedRoles={["candidate", "employer"]}>
                  <DashboardRoutes />
                </RoleBasedRoute>
              }
            />
            <Route path="/job/*" element={<JobRoutes />} />
            <Route path="/candidate/*" element={<CandidateRoutes />} />
            <Route path="/employer/*" element={<EmployerRoutes />} />
          </Routes>
        </ProfileProvider>
      </AuthProvider>
    </SnackbarProvider>
  );
}
