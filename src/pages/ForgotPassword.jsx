import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "@/components/layout/Logo.jsx";
import HomeRightSection from "@/components/layout/HomeRightSection";
import HomeStatsRow from "@/components/layout/HomeStatsRow";
import Email from "@/components/ui/Email";
import ForgetButton from "@/components/ui/ForgetButton";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    if (!e.target) return;
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="flex m-0 p-0 w-full h-screen box-border overflow-hidden">
      <Logo />

      {/* LEFT SECTION */}
      <div className="w-1/2 h-full box-border m-0 flex bg-white">
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
                  <Link to="/login" className="text-blue-800">
                    Sign In
                  </Link>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[#5E6670] font-sans text-[16px] font-normal leading-[24px] mt-0 opacity-70">
                    Don{"'"}t have an account?
                  </p>
                  <Link to="/register" className="text-blue-800">
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Email id="email" label="Email" onChange={handleInputChange} />
            </div>
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
      </div>

      {/* RIGHT SECTION */}
      <div className="w-[60%] m-0 box-border">
        <div className="relative top-0 left-0 max-w-full h-full">
          <HomeRightSection />
          <div className="absolute w-[80%] top-[60%] left-30 text-white text-[40px]">
            <p className="text-[40px]">
              Over 2345 candidates joined us to have a job
            </p>
            <HomeStatsRow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
