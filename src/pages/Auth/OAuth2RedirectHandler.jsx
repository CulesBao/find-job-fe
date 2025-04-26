import { useAuth } from "@/hooks/useAuth";
import useStorage from "@/hooks/useStorage";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OAuth2RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [accessToken, setAccessToken] = useStorage(
    import.meta.env.VITE_APP_ACCESS_TOKEN,
    ""
  );
  const { login } = useAuth();

  const getUrlParameter = (name) => {
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const handleAuth = async () => {
    const token = getUrlParameter("token");
    const isNewAccount = getUrlParameter("isNewAccount");
    const userJson = getUrlParameter("accountDto");
    const user = JSON.parse(decodeURIComponent(userJson));

    if (token) {
      setAccessToken(token);
      login(user);
      if (isNewAccount) {
        navigate("/set-up/profile ", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    handleAuth();
  }, [location]);

  return <div>Logging</div>;
};

export default OAuth2RedirectHandler;
