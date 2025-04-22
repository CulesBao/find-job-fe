import { useState } from "react";

function EmployerHeader({ logoUrl, companyName, createdAt }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleToggleFollow = () => {
    setIsFollowing(prev => !prev);
  };

  return (
    <section className="flex flex-col items-center text-center w-full p-6 bg-white rounded-2xl">
      <img
        src={logoUrl}
        className="w-70 h-70 rounded-full object-cover mb-4"
        alt="Employer Logo"
      />
      <h2 className="text-3xl font-semibold text-zinc-900 hover:text-blue-500">
        {companyName}
      </h2>
      <span className="px-2 py-1 mt-2 text-sm text-indigo-600 bg-indigo-50 rounded-full">
        Employer
      </span>
      <div className="flex items-center gap-1 mt-4 text-sm text-gray-500">
        <span>Founded on:</span>
        <span className="font-medium text-blue-500">{createdAt}</span>
      </div>
      <button
        onClick={handleToggleFollow}
        className={`mt-4 px-8 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 ${
          isFollowing
            ? "bg-gray-500 hover:bg-red-400 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {isFollowing ? "Unfollow Company" : "Follow Company"}
      </button>
    </section>
  );
}

export default EmployerHeader;
