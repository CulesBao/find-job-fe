import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthRedirect() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        if (token) {
        navigate("/constructions"); 
        } else {
        navigate("/auth"); 
        }
    }, [navigate]);

    return null; 
}