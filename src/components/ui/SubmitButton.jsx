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