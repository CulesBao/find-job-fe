import { Camera } from "lucide-react";
import "./App.css";
import { ButtonBase } from "@mui/material";
function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello !</h1>
      <Camera className="text-red-500" size={48} />
      <ButtonBase />
    </div>
  );
}

export default App;
