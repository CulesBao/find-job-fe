import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token) {
      navigate("/auth/login", { replace: true });
    } else if (
      user &&
      user.candidate_profile == null &&
      user.employer_profile == null
    ) {
      navigate("/set-up/profile", { replace: true });
    } else {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  return null;
}
