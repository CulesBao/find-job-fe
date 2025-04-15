import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
	const token = localStorage.getItem("accessToken");
	const location = useLocation();

	return token ? (
			children
	) : (
			<Navigate to="/auth/login" replace state={{ from: location }} />
	);
}
