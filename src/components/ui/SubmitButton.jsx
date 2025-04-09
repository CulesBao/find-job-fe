import { useState } from "react";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

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

    setLoading(true);
    const dataUser = {
      email: Account.email,
      password: Account.password,
      role: Account.role,
      provider: "LOCAL",
    };

    try {
      const res = await axios.post("http://localhost:8080/api/auth/register", dataUser);

      if (res.status === 201) {
        setUserInfo(res.data.data);
        setSnackbarMessage("Registration successful!");

        setTimeout(() => {
          navigate("/verify", { state: { email: Account.email } });
        }, 2000);
      } else {
        setSnackbarMessage("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Error while sending request:", err);

      const message =
        err.response?.data?.message ||
        err.response?.data?.error ||
        (err.response?.status === 400 && "Bad Request. Please check your input.") ||
        (err.response?.status === 401 && "Unauthorized. Please check your credentials.") ||
        (err.response?.status === 403 && "Forbidden. You don't have permission to access this.") ||
        (err.response?.status === 404 && "Not Found. The requested resource could not be found.") ||
        (err.response?.status === 500 && "Internal Server Error. Please try again later.") ||
        "An error occurred. Please try again later.";

      setSnackbarMessage(message);
    } finally {
      setSnackbarOpen(true);
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

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={
            snackbarMessage === "Registration successful!" ? "success" : "error"
          }
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
