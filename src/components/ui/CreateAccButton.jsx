import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { snackbar } from "@/utils/SnackbarUtils";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";

export default function SubmitButton({ Account }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (Account.password !== Account.confirmPassword) {
      snackbar.warning("Passwords do not match.");
      return;
    }

    if (!document.getElementById("terms").checked) {
      snackbar.warning("Please accept the terms and conditions.");
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

      navigate("/verify", {
        state: {
          data: res.data,
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="bg-[#007bff] text-white py-4 mb-[10px] border-none rounded-md cursor-pointer text-lg font-sans"
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
