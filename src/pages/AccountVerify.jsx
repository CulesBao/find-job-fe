import { useState } from "react";
import Logo from "@/components/layout/Logo";
import VerificationCode from "@/components/ui/VerifyCode";
import VerifyButton from "@/components/ui/VerifyButton";

const Accountverify = () => {
    const [code, setCode] = useState("");
    const email = "emailaddress@gmail.com"; // bạn có thể lấy từ router hoặc context

    return (
        <div className="flex flex-col w-full h-[100vh] overflow-hidden items-center justify-center">
            <div className="">
                <Logo />
            </div>

            <form className="w-1/3 h-full flex flex-col items-center justify-center relative top-0 gap-5">
                <div className="flex flex-col items-center">
                    <h2 className="text-gray-900 text-4xl font-medium leading-10 mb-8 text-center">Email Verification</h2>
                    <p className="text-gray-600 text-base leading-6 mb-8 text-center opacity-80">
                        We{"'"}ve sent a verification to <strong>{email}</strong> to verify your email address and activate your account.
                    </p>
                </div>

                <VerificationCode onCodeComplete={(val) => setCode(val)} />

                <VerifyButton code={code} email={email} />

                <p className="text-gray-600 text-base opacity-80 text-center">
                    Didn’t receive any code? <a href="#" className="text-blue-500 hover:underline">Resend</a>
                </p>
            </form>
        </div>
    );
};

export default Accountverify;
