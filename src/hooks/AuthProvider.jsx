import { getMyAccount } from "@/services/accountService";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);
  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    setUser(null);
  };
  const updateUser = async () => {
    const getMyAccountResponse = await getMyAccount();
    if (getMyAccountResponse?.status === 200) {
      setUser(getMyAccountResponse?.data);
    }
  };
  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, logout, isAuthenticated, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
