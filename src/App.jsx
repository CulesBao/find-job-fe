import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Constructions from "./pages/Constructions";
import Accountverify from "./pages/AccountVerify";
import ResetPassword from "./pages/ResetPassword";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utils/SnackbarUtils";
import { AuthProvider } from "./hooks/AuthProvider";
import AuthRedirect from "./hooks/AuthRedirect";
import PrivateRoute from "./hooks/PrivateRoute";
import AuthPage from "./pages/AuthPage";

export default function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackbarUtilsConfigurator />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/forgot-password" element={<AuthPage />} />
            <Route path="/" element={<AuthRedirect />} />
            <Route 
              path="/constructions" 
              element={
                <PrivateRoute>
                  <Constructions />
                </PrivateRoute>
              } 
            />
            <Route path="/verify/:id" element={<Accountverify />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </Router>
      </AuthProvider>
    </SnackbarProvider>
  );
}
