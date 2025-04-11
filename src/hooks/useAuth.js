import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const useAuth = () => {
  const { user, login, logout, isAuthenticated } = useContext(AuthContext);
  return { user, login, logout, isAuthenticated };
};
