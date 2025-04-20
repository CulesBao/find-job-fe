import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const useAuth = () => {
  const { user, setUser, updateUser, login, logout, isAuthenticated } =
    useContext(AuthContext);
  return { user, setUser, updateUser, login, logout, isAuthenticated };
};
