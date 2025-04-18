import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const role = user?.role?.toLowerCase();
    if (role === "admin") {
      navigate("/admin/dashboard", { replace: true });
      return;
    }
    if (role === "employer") {
      navigate("/employer/dashboard/my-job", { replace: true });
      return;
    }
    if (role === "candidate") {
      navigate("/candidate/dashboard", { replace: true });
      return;
    }
}, [navigate]);

  return null;
};

export default DashboardRedirect;
