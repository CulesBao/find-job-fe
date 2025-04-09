import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "@/components/layout/Logo.jsx";
import HomeRightSection from "@/components/layout/HomeRightSection";
import HomeStatsRow from "@/components/layout/HomeStatsRow";
import Email from "@/components/ui/Email";
import Password from "@/components/ui/Password";
import RoleSelect from "@/components/ui/RoleSelect";
import SubmitButton from "@/components/ui/SubmitButton";

const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
    });

    const handleRoleChange = (role) => {
        setFormData({
            ...formData,
            role: role,
        })
    };

    const handleInputChange = (e) => {
        if (!e.target) return;
        
        const { id, value } = e.target;
        
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };
    
    const emailLabel = formData.role === "CANDIDATE" 
    ? "Personal Email" 
    : formData.role === "EMPLOYER" 
        ? "Company Email" 
        : "Email";


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
                                    Create Account.
                                </h1>
                                <p className="text-[#5E6670] font-sans text-[16px] font-normal leading-[24px] mt-0 opacity-70">
                                    Already have an account?{" "}
                                    <a className="text-blue-800" href="#">Login</a>
                                </p>
                            </div>
                            <div className="pr-10">
                                <RoleSelect onAccountRoleChange={handleRoleChange} />
                            </div>
                        </div>
                        <div>
                            <Email id="email" label={emailLabel} onChange={handleInputChange} />
                            <Password id="password" label="Password" onChange={handleInputChange} />
                            <Password id="confirmPassword" label="Confirm Password" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="text-[#767F8C] font-sans text-sm font-normal leading-[20px] py-[20px] gap-[10px]">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms" className="text-[#5E6670] font-sans text-[16px] font-normal leading-[24px] mt-0">
                            {" "}I agree to the <a className="text-blue-800" href="#">Terms of Service</a> and <a className="text-blue-800" href="#">Privacy Policy</a>
                        </label>
                    </div>
                    <Link to="/verify">
                    <SubmitButton Account={formData}/> </Link>
                </form>
            </div>

            {/* RIGHT SECTION */}
            <div className="w-[60%] m-0 box-border">
                <div className="relative top-0 left-0 max-w-full h-full">
                    <HomeRightSection />
                    <div className="absolute w-[80%] top-[55%] left-30 text-white text-[40px]">
                        <p className="text-[40px]">Over 23456 Candidates joined us to have a job</p>
                        <HomeStatsRow />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;