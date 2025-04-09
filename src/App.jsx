import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Constructions from "./pages/Constructions";
import Accountverify from "./pages/AccountVerify";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/constructions" element={<Constructions />} />
        <Route path="/verify" element={<Accountverify />} />
      </Routes>
    </Router>
  );
}

export default App;
