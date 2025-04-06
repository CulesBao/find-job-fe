import Logo from "@/components/layout/Logo";

const Accountverify = () => {
    return (
        <div className="flex flex-col w-full h-screen overflow-hidden items-center justify-center">
            <div className="">
                <Logo />
            </div>

            <form className="w-1/3 h-4/5 flex flex-col items-center justify-center relative top-1/10 gap-5">
                <div className="flex flex-col items-center">
                <div>
                    <h2 className="text-gray-900 text-4xl font-medium leading-10 mb-8 text-center">Email Verification</h2>
                </div>
                <p className="text-gray-600 text-base leading-6 mb-8 text-center opacity-80">
                    We{"'"}ve sent a verification to 
                    emailaddress@gmail.com to verify your email address and activate your account.
                </p>
                </div>

                {/* <Verify onCodeComplete={handleCodeComplete} /> */}

                <button
                type="button"
                // onClick={handleVerify}
                className="w-full bg-blue-500 text-white px-4 py-4 mt-5 mb-5 rounded cursor-pointer text-lg font-sans"
                >
                Verify My Account →
                </button>

                <p className="text-gray-600 text-base opacity-80 text-center">
                Didn’t receive any code? <a href="#" className="text-blue-500 hover:underline">Resend</a>
                </p>
            </form>
        </div>

    );
}

export default Accountverify;