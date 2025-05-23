/* eslint-disable unused-imports/no-unused-vars */
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { useAuth } from "@/hooks/useAuth";
import useStorage from "@/hooks/useStorage";

export default function SignInButton({ Account }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login: loginUser } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const [accessToken, setAccessToken] = useStorage(
    import.meta.env.VITE_APP_ACCESS_TOKEN,
    ""
  );

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const minLoadingTime = 1300;
      const startTime = Date.now();

      const dataUser = {
        email: Account.email,
        password: Account.password,
        role: Account.role,
        provider: "LOCAL",
      };

      const res = await login(dataUser);
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
      await new Promise((resolve) => setTimeout(resolve, remainingTime));

      if (!res || res.error || res.status >= 400) {
        throw new Error();
      }

      setAccessToken(res.data.token);
      loginUser(res.data.account_dto);

      if (res.data.is_new_account) {
        navigate("/set-up/profile ", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
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
    </>
  );
}
