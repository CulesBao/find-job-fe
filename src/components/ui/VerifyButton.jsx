import { useState } from "react";
import axios from "axios";

export default function VerifyButton({ code, email }) {
    const [loading, setLoading] = useState(false);

    const handleVerify = async () => {
        if (!code) {
            alert("Please enter the verification code.");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post("http://localhost:8080/api/auth/verify-email", {
                email,
                code,
            });

            if (res.status === 200) {
                alert("Account verified successfully!");
                // Redirect nếu cần: window.location.href = "/login"
            } else {
                alert(res.data.message || "Verification failed.");
            }
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Error verifying your account.");
        } finally {
            setLoading(false);
        }
    };

    return (
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
    );
}
