import HomeRightSection from "@/components/layout/HomeRightSection";
import HomeStatsRow from "@/components/layout/HomeStatsRow";
import Logo from "@/components/layout/Logo";
import Email from "@/components/ui/Email";
import Password from "@/components/ui/Password";
import { Link } from "react-router-dom";

function Login() {
    return (
            <div className="flex m-0 p-0 w-full h-screen box-border overflow-hidden">
            <Logo />
    
            {/* LEFT SECTION */}
            <div className="w-1/2 h-full box-border m-0 flex bg-white">
            <form className="w-full h-[80%] p-[25%_10%_0_40px] gap-[20px]">
                <div className="inline-block gap-[10px] items-center mb-0">
                    <div className="flex pl-5 justify-between items-center w-full mb-5">
                        <div className="flex-1 w-full">
                        <h1 className="text-[#18191C] font-sans text-4xl font-normal leading-[40px] mb-[10px]">
                            Log in
                        </h1>
                        <p className="text-[#5E6670] font-sans text-[16px] font-normal leading-[24px] mt-0 opacity-70">
                            Don{"'"}t have an Account?{" "}
                            <Link to ="/" className="text-blue-800">
                                Create Account
                            </Link>
                        </p>
                        </div>
                    </div>
                    <div>
                        <Email
                        id="email"
                        label="Email"
                        />
                        <Password
                        id="password"
                        label="Password"
                        />
                    </div>
                </div>
    
                <button
                className="w-[95%] mt-5 bg-[#007bff] text-white py-4 mb-[10px] border-none rounded-md cursor-pointer text-lg font-sans"
                type="button"
                >
                Login →
                </button>
            </form>
            </div>
    
            {/* RIGHT SECTION */}
            <div className="w-[60%] m-0 box-border">
            <div className="relative top-0 left-0 max-w-full h-full">
                <HomeRightSection />
                <div className="absolute w-[80%] top-[55%] left-30 text-white text-[40px]">
                <p className="text-[40px]">
                    Over 23456 Candidates joined us to have a job
                </p>
                <HomeStatsRow />
                </div>
            </div>
            </div>
        </div>
        );
}

export default Login;