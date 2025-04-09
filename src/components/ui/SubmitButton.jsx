import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";

export default function SubmitButton({ Account }) {
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (Account.password !== Account.confirmPassword) {
      setSnackbarMessage("Passwords do not match!");
      setSnackbarOpen(true);
      return;
    }

    if (!document.getElementById("terms").checked) {
      setSnackbarMessage("You must accept the terms and conditions.");
      setSnackbarOpen(true);
      return;
    }

    try {
      setLoading(true);
      const dataUser = {
        email: Account.email,
        password: Account.password,
        role: Account.role,
        provider: "LOCAL",
      };

      await register(dataUser);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="w-[95%] bg-[#007bff] text-white py-4 mb-[10px] border-none rounded-md cursor-pointer text-lg font-sans"
        type="button"
        onClick={handleSubmit}
        disabled={loading}
      >
        Create Account →
      </button>

      <Backdrop sx={{ color: "#fff", zIndex: 1301 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
