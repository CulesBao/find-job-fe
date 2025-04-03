<<<<<<< HEAD
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function SubmitButton({ User }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const dataUser = {
      email: User.email,
      password: User.password,
      role: User.role,
      provider: "LOCAL",
    };

    console.log("User data:", User);
    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataUser),
      });
      console.log(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="w-[95%] bg-[#007bff] text-white py-4 mb-[10px] border-none rounded-md cursor-pointer text-lg font-sans"
        type="button"
        onClick={handleSubmit}
        disabled={loading}
      >
        Create Account →
      </button>

      <Backdrop sx={{ color: "#fff", zIndex: 1301 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
=======
export default function SubmitButton({User}) {
    return (
        <button 
            className="w-[95%] bg-[#007bff] text-white py-4 mb-[10px] border-none rounded-md cursor-pointer text-lg font-sans"
            type="button"
            onClick={async () => {
                const dataUser = {
                email: User.email,
                password: User.password,
                role: User.role,
                provider: "LOCAL"
                };
                console.log("User data:", User);
                try {
                const res = await fetch("http://localhost:8080/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dataUser)
                });
                console.log(await res.json());
                } catch (err) {
                console.error(err);
                }
            }}
            >
            Create Account →
        </button>
    )
}
>>>>>>> e39897f (chore fix)
