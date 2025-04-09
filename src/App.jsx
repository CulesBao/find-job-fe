import "./App.css";
import Register from "./pages/Register";
import dotenv from "dotenv";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utils/SnackBarUtils";
import Constructions from "./pages/Constructions.jsx";
// import Error from "./pages/Error";

dotenv.config();
function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Register />
      {/* <Error /> */}
      {/* <Constructions />; */}
    </SnackbarProvider>
  );
}

export default App;
