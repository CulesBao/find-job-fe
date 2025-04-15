import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { snackbar } from "@/utils/SnackbarUtils";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";

export default function SubmitButton({ Account }) {
  const [loading, setLoading] = useState(false);
  const [submitData, setSubmitData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (Account.password !== Account.confirmPassword) {
      snackbar.warning("Passwords do not match.");
      return;
    }

    if (!document.getElementById("terms").checked) {
      snackbar.warning("Please accept the terms and conditions.");
      return;
    }

    const dataUser = {
      email: Account.email,
      password: Account.password,
      role: Account.role,
      provider: "LOCAL",
    };

    setSubmitData(dataUser);
  };

  useEffect(() => {
    const submit = async () => {
      if (!submitData) return;
      setLoading(true);
      try {
        const res = await register(submitData);
        if (!res || res.error || res.status >= 400) {
          throw new Error();
        }
        navigate(`/verify/${res.data.id}`, {
          state: { data: res.data },
        });
      } finally {
        setLoading(false);
        setSubmitData(null);
      }
    };

    submit();
  }, [submitData, navigate]);

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
