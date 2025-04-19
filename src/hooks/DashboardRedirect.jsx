import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const role = user?.role?.toLowerCase();
    if (role === "admin") {
      navigate("", { replace: true });
      return;
    }
    if (role === "employer") {
      navigate("my-job", { replace: true });
      return;
    }
    if (role === "candidate") {
      navigate("applied-jobs", { replace: true });
      return;
    }

    navigate("/auth/login", { replace: true });
  }, [navigate]);

  return null;
};

export default DashboardRedirect;
