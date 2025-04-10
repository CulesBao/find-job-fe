import { useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { verifyEmail } from "@/services/authService";

export default function VerifyButton({ data, code }) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleVerify = async () => {
        try {
            setLoading(true);
            const res = await verifyEmail(data.id, { code: code });
            if (!res || res.error || res.status >= 400) {
                throw new Error();
            }
        } finally {
            setLoading(false);
        }
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
                {loading ? "Verifying..." : "Verify My Account →"}
            </button>

            <Backdrop sx={{ color: "#fff", zIndex: 1301 }} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}
