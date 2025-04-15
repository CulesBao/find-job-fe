import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utils/SnackbarUtils";
import { AuthProvider } from "./hooks/AuthProvider";
import AuthRoutes from "./pages/auth/AuthRoutes";
import CandidateProfileSettingRoutes from "./pages/CandidateSetting/CandidateSettingRoutes";
import PrivateRoute from "./hooks/PrivateRoute";
import AuthRedirect from "./hooks/AuthRedirect";

export default function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackbarUtilsConfigurator />
      <AuthProvider>
      <Routes>
        <Route path="/" element={<AuthRedirect />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route 
          path="/candidate/*" 
          element={
            <PrivateRoute>
              <CandidateProfileSettingRoutes />
            </PrivateRoute>
          } 
        />
      </Routes>
      </AuthProvider>
    </SnackbarProvider>
  );
}
