import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Constructions from "./pages/Constructions";
import Accountverify from "./pages/AccountVerify";
import Login from "./pages/Login";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utils/SnackbarUtils";
import { AuthProvider } from "./hooks/AuthProvider";

export default function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackbarUtilsConfigurator />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/constructions" element={<Constructions />} />
            <Route path="/verify" element={<Accountverify />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AuthProvider>
    </SnackbarProvider>
  );
}
