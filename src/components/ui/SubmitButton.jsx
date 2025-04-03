import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SubmitButton({ Account }) {
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [userInfo, setUserInfo] = useState(null);

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

    console.log("User data:", Account);
    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataUser),
      });
      const result = await res.json();

      if (res.status === 201) {
        setUserInfo(result.data);
        setSnackbarOpen(true);
        setSnackbarMessage("Registration successful!");
      } else if (res.status === 400) {
        setSnackbarMessage(
          result.message ||
            result.error ||
            "Bad Request. Please check your input."
        );
        setSnackbarOpen(true);
      } else if (res.status === 401) {
        setSnackbarMessage(
          result.message ||
            result.error ||
            "Unauthorized. Please check your credentials."
        );
        setSnackbarOpen(true);
      } else if (res.status === 403) {
        setSnackbarMessage(
          result.message ||
            result.error ||
            "Forbidden. You don't have permission to access this."
        );
        setSnackbarOpen(true);
      } else if (res.status === 404) {
        setSnackbarMessage(
          result.message ||
            result.error ||
            "Not Found. The requested resource could not be found."
        );
        setSnackbarOpen(true);
      } else if (res.status === 500) {
        setSnackbarMessage(
          result.message ||
            result.error ||
            "Internal Server Error. Please try again later."
        );
        setSnackbarOpen(true);
      } else {
        setSnackbarMessage("Registration failed. Please try again.");
        setSnackbarOpen(true);
      }

      console.log(result);
    } catch (err) {
      console.error("Error while sending request:", err);
      setSnackbarMessage("An error occurred. Please try again later.");
      setSnackbarOpen(true);
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
