import Email from "@/components/input/Email";
import ForgetButton from "@/components/button/ForgetButton";
import GoogleIcon from "@/assets/Google.svg";

const ForgotPasswordForm = ({ formData, onInputChange, onModeChange }) => {
  return (
    <form className="w-[80%] h-[80%] pl-20 pt-[30%] flex flex-col justify-start gap-5">
      <div className="inline-block gap-[10px] items-center mb-0">
        <div className="flex pl-5 justify-between items-center w-full mb-5">
          <div className="flex-1 w-full">
            <h1 className="text-[#18191C] text-4xl font-normal leading-[40px] mb-[10px]">
              Forgot Password
            </h1>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-[#5E6670] text-[16px] opacity-70">Go back to</p>
              <button
                className="text-blue-800 underline"
                type="button"
                onClick={() => onModeChange("login")}
              >
                Log in
              </button>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-[#5E6670] text-[16px] opacity-70">
                Don{"'"}t have an account?
              </p>
              <button
                className="text-blue-800 underline"
                type="button"
                onClick={() => onModeChange("register")}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
        <div>
          <Email id="email" label="Email" onChange={onInputChange} />
        </div>
      </div>

      <ForgetButton Account={formData} />

      <p className="text-center mt-0 opacity-60">or</p>
      <div className="flex justify-center items-center">
        <button className="flex w-[258px] px-6 py-3 justify-center items-center gap-3 rounded border border-[#E4E5E8] bg-white">
          <img src={GoogleIcon} alt="Google" width={20} height={20} />
          Sign in with Google
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;