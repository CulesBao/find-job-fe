import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "@/components/layout/Logo.jsx";
import HomeRightSection from "@/components/layout/HomeRightSection";
import HomeStatsRow from "@/components/layout/HomeStatsRow";
import Email from "@/components/input/Email";
import Password from "@/components/input/Password";
import RoleSelect from "@/components/select/RoleSelect";
import SubmitButton from "@/components/button/CreateAccButton";
import SignInButton from "@/components/button/SignInButton";
import ForgetButton from "@/components/button/ForgetButton";

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mode, setMode] = useState("login");

  useEffect(() => {
    if (location.pathname === "/auth/login") setMode("login");
    else if (location.pathname === "/auth/register") setMode("register");
    else if (location.pathname === "/auth/forgot-password") setMode("forgot");
  }, [location.pathname]);

  useEffect(() => {
    if (mode === "login") navigate("/auth/login", { replace: true });
    else if (mode === "register") navigate("/auth/register", { replace: true });
    else if (mode === "forgot")
      navigate("/auth/forgot-password", { replace: true });
  }, [mode, navigate]);

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

  const emailLabel =
    formData.role === "EMPLOYER" ? "Company Email" : "Personal Email";

  return (
    <div className="flex m-0 p-0 w-full h-screen box-border overflow-hidden">
      <Logo />

      <div className="w-1/2 h-full box-border m-0 flex bg-white">
        {mode === "login" && (
          <>
            <form className="w-[80%] h-[80%] pl-20 pt-[30%] flex flex-col justify-start gap-5">
              <div className="inline-block gap-[10px] items-center mb-0">
                <div className="flex pl-5 justify-between items-center w-full mb-5">
                  <div className="flex-1 w-full">
                    <h1 className="text-[#18191C] font-sans text-4xl font-normal leading-[40px] mb-[10px]">
                      Sign in
                    </h1>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-[#5E6670] font-sans text-[16px] font-normal leading-[24px] mt-0 opacity-70">
                        Don{"'"}t have an account?
                      </p>
                      <button
                        className="text-blue-800 underline"
                        type="button"
                        onClick={() => setMode("register")}
                      >
                        Create Account
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <Email
                    id="email"
                    label="Email"
                    onChange={handleInputChange}
                  />
                  <Password
                    id="password"
                    label="Password"
                    onChange={handleInputChange}
                    className="mb-2"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="terms"
                  className="text-[#5E6670] font-sans text-[16px] font-normal leading-[24px] mt-0 opacity-70"
                >
                  <input type="checkbox" id="terms" className="mr-2" />
                  Remember me
                </label>

                <button
                  className="text-blue-800 underline"
                  type="button"
                  onClick={() => setMode("forgot")}
                >
                  Forgot Password?
                </button>
              </div>

              <SignInButton Account={formData} />

              <p className="text-center mt-0 opacity-60">or</p>
              <div className="flex justify-center items-center">
                <button className="flex w-[258px] px-6 py-3 justify-center items-center gap-3 rounded border border-[#E4E5E8] bg-white">
                  <img
                    src="src/assets/Google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                  />
                  Sign in with Google
                </button>
              </div>
            </form>
          </>
        )}

        {mode === "register" && (
          <>
            <form className="w-[80%] h-[80%] pt-[28%] flex flex-col justify-start">
              <div className="inline-block gap-[10px] items-center mb-0">
                <div className="flex pl-5 justify-between items-center w-full mb-5">
                  <div className="flex-1 w-full">
                    <h1 className="text-[#18191C] font-sans text-4xl font-normal leading-[40px] mb-[10px]">
                      Create Account
                    </h1>
                    <p className="text-[#5E6670] font-sans text-[16px] font-normal leading-[24px] mt-0 opacity-70">
                      Already have an account?{" "}
                      <button
                        className="text-blue-800 underline"
                        type="button"
                        onClick={() => setMode("login")}
                      >
                        Log in
                      </button>
                    </p>
                  </div>
                  <div className="pr-10">
                    <RoleSelect onAccountRoleChange={handleRoleChange} />
                  </div>
                </div>
                <div>
                  <Email
                    id="email"
                    label={emailLabel}
                    onChange={handleInputChange}
                  />
                  <Password
                    id="password"
                    label="Password"
                    onChange={handleInputChange}
                  />
                  <Password
                    id="confirmPassword"
                    label="Confirm Password"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="text-[#767F8C] font-sans text-sm font-normal leading-[20px] py-[20px] gap-[10px]">
                <input type="checkbox" id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-[#5E6670] font-sans text-[16px] font-normal leading-[24px] mt-0"
                >
                  {" "}
                  I agree to the{" "}
                  <a className="text-blue-800" href="#">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a className="text-blue-800" href="#">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <SubmitButton Account={formData} />

              <p className="text-center mt-0 opacity-60">or</p>
              <div className="flex justify-center items-center mt-3">
                <button className="flex w-[258px] px-6 py-3 justify-center items-center gap-3 rounded border border-[#E4E5E8] bg-white">
                  <img
                    src="src/assets/Google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                  />
                  Sign in with Google
                </button>
              </div>
            </form>
          </>
        )}

        {mode === "forgot" && (
          <>
            <form className="w-[80%] h-[80%] pl-20 pt-[30%] flex flex-col justify-start gap-5">
              <div className="inline-block gap-[10px] items-center mb-0">
                <div className="flex pl-5 justify-between items-center w-full mb-5">
                  <div className="flex-1 w-full">
                    <h1 className="text-[#18191C] font-sans text-4xl font-normal leading-[40px] mb-[10px]">
                      Forgot Password
                    </h1>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-[#5E6670] font-sans text-[16px] font-normal leading-[24px] mt-0 opacity-70">
                        Go back to
                      </p>
                      <button
                        className="text-blue-800 underline"
                        type="button"
                        onClick={() => setMode("login")}
                      >
                        Log in
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-[#5E6670] font-sans text-[16px] font-normal leading-[24px] mt-0 opacity-70">
                        Don{"'"}t have an account?
                      </p>
                      <button
                        className="text-blue-800 underline"
                        type="button"
                        onClick={() => setMode("register")}
                      >
                        Create Account
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <Email
                    id="email"
                    label="Email"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <ForgetButton Account={formData} />

              <p className="text-center mt-0 opacity-60">or</p>
              <div className="flex justify-center items-center">
                <button className="flex w-[258px] px-6 py-3 justify-center items-center gap-3 rounded border border-[#E4E5E8] bg-white">
                  <img
                    src="src/assets/Google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                  />
                  Sign in with Google
                </button>
              </div>
            </form>
          </>
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
