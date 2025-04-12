import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/layout/Logo";
import Password from "@/components/ui/Password";
import ResetPwButton from "@/components/ui/ResetPwButton";

const ResetPassword = () => {
    const location = useLocation();

    const data = location.state?.data;

    return (
        <div className="flex flex-col w-full h-[100vh] overflow-hidden items-center justify-center">
            <div className="">
                <Logo />
            </div>

            <form className="w-1/3 h-full flex flex-col items-center justify-center relative top-0 gap-2">
                <div className="flex flex-col items-center">
                    <h2 className="text-gray-900 text-4xl font-medium leading-10 mb-8 text-center">Reset Password</h2>
                    <p className="text-gray-600 text-base leading-6 mb-2 text-center opacity-80">
                        Please enter your new password below.
                    </p>
                </div>
                <Password
                id="password"
                label="Password"
                />
                <Password
                id="confirmPassword"
                label="Confirm Password"
                />

                <ResetPwButton />

            </form>
        </div>
    );
};

export default ResetPassword;
