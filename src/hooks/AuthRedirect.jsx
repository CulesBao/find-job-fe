import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthRedirect() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const user = JSON.parse(localStorage.getItem("user"));
        const role = user?.role?.toLowerCase();
        navigate(token ? `${role}/dashboard` : "/auth/login", { replace: true });
    }, [navigate]);

    return null;
}