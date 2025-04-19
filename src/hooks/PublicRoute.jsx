import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const token = localStorage.getItem("accessToken");
  const userData = JSON.parse(localStorage.getItem("user"));
  const role = userData?.role?.toLowerCase();

  if (token && role) {
    return <Navigate to={`/dashboard`} replace />;
  }

  return children;
}
