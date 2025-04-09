import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Constructions from "./pages/Constructions";
import Accountverify from "./pages/AccountVerify";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utils/SnackBarUtils";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackbarUtilsConfigurator />
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/constructions" element={<Constructions />} />
          <Route path="/verify" element={<Accountverify />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
