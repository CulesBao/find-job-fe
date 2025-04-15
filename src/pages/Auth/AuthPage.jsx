import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "@/components/layout/Logo.jsx";
import HomeRightSection from "@/components/layout/HomeRightSection";
import HomeStatsRow from "@/components/layout/HomeStatsRow";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mode, setMode] = useState("login");

  useEffect(() => {
    if (mode === "login" && location.pathname !== "/auth/login") 
      navigate("/auth/login", { replace: true });
    else if (mode === "register" && location.pathname !== "/auth/register")
      navigate("/auth/register", { replace: true });
    else if (mode === "forgot" && location.pathname !== "/auth/forgot-password")
      navigate("/auth/forgot-password", { replace: true });
  }, [mode, navigate, location.pathname]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "CANDIDATE",
  });

  const handleInputChange = (e) => {
    if (!e.target) return;
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({
      ...prev,
      role,
    }));
  };

  return (
    <div className="flex m-0 p-0 w-full h-screen box-border overflow-hidden">
      <Logo />

      <div className="w-1/2 h-full box-border m-0 flex bg-white">
        {mode === "login" && (
          <LoginForm 
            formData={formData}
            onInputChange={handleInputChange}
            onModeChange={setMode}
          />
        )}

        {mode === "register" && (
          <RegisterForm 
            formData={formData}
            onInputChange={handleInputChange}
            onRoleChange={handleRoleChange}
            onModeChange={setMode}
          />
        )}

        {mode === "forgot" && (
          <ForgotPasswordForm 
            formData={formData}
            onInputChange={handleInputChange}
            onModeChange={setMode}
          />
        )}
      </div>

      <div className="w-[60%] m-0 box-border relative">
        <HomeRightSection />
        <div className="absolute w-[80%] top-[60%] left-30 text-white text-[40px]">
          <p>Over 2345 candidates joined us to have a job</p>
          <HomeStatsRow />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
