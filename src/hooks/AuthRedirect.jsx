import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthRedirect() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        navigate(token ? "/dashboard" : "/auth/login", { replace: true });
    }, [navigate]);

    return null;
}