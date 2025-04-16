import Email from "@/components/input/Email";
import Password from "@/components/input/Password";
import RoleSelect from "@/components/select/RoleSelect";
import SubmitButton from "@/components/button/CreateAccButton";
import GoogleIcon from "@/assets/Google.svg";

const RegisterForm = ({ formData, onInputChange, onRoleChange, onModeChange }) => {
  const emailLabel = formData.role === "EMPLOYER" ? "Company Email" : "Personal Email";

  return (
    <form className="w-[80%] h-[80%] pt-[28%] flex flex-col justify-start">
      <div className="inline-block gap-[10px] items-center mb-0">
        <div className="flex pl-5 justify-between items-center w-full mb-5">
          <div className="flex-1 w-full">
            <h1 className="text-[#18191C] text-4xl font-normal leading-[40px] mb-[10px]">
              Create Account
            </h1>
            <p className="text-[#5E6670] text-[16px] opacity-70">
              Already have an account?{" "}
              <button
                className="text-blue-800 underline"
                type="button"
                onClick={() => onModeChange("login")}
              >
                Log in
              </button>
            </p>
          </div>
          <div className="pr-10">
            <RoleSelect onAccountRoleChange={onRoleChange} />
          </div>
        </div>
        <div>
          <Email id="email" label={emailLabel} onChange={onInputChange} />
          <Password id="password" label="Password" onChange={onInputChange} />
          <Password id="confirmPassword" label="Confirm Password" onChange={onInputChange} />
        </div>
      </div>

      <div className="text-[#767F8C] text-sm leading-[20px] py-[20px] gap-[10px]">
        <input type="checkbox" id="terms" required />
        <label htmlFor="terms" className="text-[#5E6670] text-[16px]">
          {" "}
          I agree to the{" "}
          <a className="text-blue-800" href="#">Terms of Service</a> and{" "}
          <a className="text-blue-800" href="#">Privacy Policy</a>
        </label>
      </div>

      <SubmitButton Account={formData} />

      <p className="text-center mt-0 opacity-60">or</p>
      <div className="flex justify-center items-center mt-3">
        <button className="flex w-[258px] px-6 py-3 justify-center items-center gap-3 rounded border border-[#E4E5E8] bg-white">
        <img src={GoogleIcon} alt="Google" width={20} height={20} />
          Sign in with Google
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;