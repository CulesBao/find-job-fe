import { Navigate } from "react-router-dom";

const RoleBasedRoute = ({ allowedRoles, children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  const role = user.role?.toLowerCase();

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RoleBasedRoute;
