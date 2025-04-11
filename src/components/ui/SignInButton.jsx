import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { useAuth } from "@/hooks/useAuth";

export default function SignInButton({ Account }) {
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const { login: loginUser} = useAuth();

const handleSubmit = async () => {
    
    try {
    setLoading(true);
    const dataUser = {
        email: Account.email,
        password: Account.password,
        role: Account.role,
        provider: "LOCAL",
    };

    const res = await login(dataUser);

    if (!res || res.error || res.status >= 400) {
        throw new Error();
    }

    loginUser(res.data);
    navigate("#");

    } finally {
    setLoading(false);
    }
};

return (
    <>
    <button
        className="bg-[#007bff] text-white py-4 border-none rounded-md cursor-pointer text-lg font-sans"
        type="button"
        onClick={handleSubmit}
        disabled={loading}
    >
        Sign In →
    </button>

    <Backdrop sx={{ color: "#fff", zIndex: 1301 }} open={loading}>
        <CircularProgress color="inherit" />
    </Backdrop>
    </>
);
}
