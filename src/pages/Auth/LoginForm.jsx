import Email from "@/components/input/Email";
import Password from "@/components/input/Password";
import SignInButton from "@/components/button/SignInButton";
import GoogleIcon from "@/assets/Google.svg";

const LoginForm = ({ formData, onInputChange, onModeChange }) => {
  return (
    <form className="w-[80%] h-[80%] pl-20 pt-[30%] flex flex-col justify-start gap-5">
      <div className="inline-block gap-[10px] items-center mb-0">
        <div className="flex pl-5 justify-between items-center w-full mb-5">
          <div className="flex-1 w-full">
            <h1 className="text-[#18191C] font-sans text-4xl font-normal leading-[40px] mb-[10px]">
              Sign in
            </h1>
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
          <Password
            id="password"
            label="Password"
            onChange={onInputChange}
            className="mb-2"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label
          htmlFor="terms"
          className="text-[#5E6670] text-[16px] opacity-70"
        >
          <input type="checkbox" id="terms" className="mr-2" />
          Remember me
        </label>
        <button
          className="text-blue-800 underline"
          type="button"
          onClick={() => onModeChange("forgot")}
        >
          Forgot Password?
        </button>
      </div>

      <SignInButton Account={formData} />

      <p className="text-center mt-0 opacity-60">or</p>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="flex w-[258px] px-6 py-3 justify-center items-center gap-3 rounded border border-[#E4E5E8] bg-white"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = import.meta.env.VITE_APP_GOOGLE_AUTH_URL;
          }}
        >
          <img src={GoogleIcon} alt="Google" width={20} height={20} />
          Sign in with Google
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
