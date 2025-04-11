import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";

export default function SignInButton({ Account }) {
const [loading, setLoading] = useState(false);
const [snackbarOpen, setSnackbarOpen] = useState(false);
const [snackbarMessage, setSnackbarMessage] = useState("");
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

    const res = await register(dataUser);

    if (!res || res.error || res.status >= 400) {
        throw new Error();
    }

    setSnackbarMessage("Registration successful!");
    setSnackbarOpen(true);

    navigate("/verify", {
        state: {
        data: res.data
        },
    });

    } finally {
    setLoading(false);
    }
};

return (
    <>
    <button
        className="bg-[#007bff] text-white py-4 border-none rounded-md cursor-pointer text-lg font-sans"
        type="button"
        onClick={handleSubmit}
        disabled={loading}
    >
        Sign In →
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
            severity={snackbarMessage === "Registration successful, please check your email to verify your account" ? "success" : "error"}
            variant="filled"
            sx={{ width: "100%" }}
        >
            {snackbarMessage}
        </Alert>
    </Snackbar>
    </>
);
}
