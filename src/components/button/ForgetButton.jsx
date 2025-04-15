import { useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
// import { useNavigate } from "react-router-dom";

export default function ForgetButton() {
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    const handleVerify = async () => {
        // const minLoadingTime = 1300; 
        // const startTime = Date.now();
        setLoading(true);
    
        // try {
        //     const res = await verifyEmail(data.id, { code });

        //     const elapsedTime = Date.now() - startTime;
        //     const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
        //     await new Promise(resolve => setTimeout(resolve, remainingTime));

        //     if (!res || res.error || res.status >= 400) {
        //         throw new Error();
        //     }

        //     navigate("/login", {
        //         state: {
        //             data: data,
        //         },
        //     });

        // } finally {
        //     setLoading(false);
        // }
    };
    
    return (
        <>
            <button
                type="button"
                onClick={handleVerify}
                className={`w-full text-white px-4 py-4 mt-5 mb-5 rounded text-lg font-sans transition-all duration-200 ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                }`}
                disabled={loading}
            >
                Reset Password →
            </button>

            <Backdrop 
                sx={{ 
                    color: "#fff", 
                    zIndex: 1301,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                }} 
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}