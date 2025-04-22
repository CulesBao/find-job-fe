import { useState } from "react";

function CandidateHeader({ avatarUrl, fullName, createdAt }) {

  const [isFollowing, setIsFollowing] = useState(false);

  const handleToggleFollow = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <section className="flex flex-col items-center text-center w-full p-6 bg-white rounded-2xl">
      <img
        src={avatarUrl}
        className="w-70 h-70 rounded-full object-cover mb-4"
        alt="Candidate avatar"
      />
      <h2 className="text-3xl font-semibold text-zinc-900 hover:text-blue-500">{fullName}</h2>
      <span className="px-2 py-1 mt-2 text-sm text-green-600 bg-green-50 rounded-full">
        Candidate
      </span>
      <div className="flex items-center gap-1 mt-4 text-sm text-gray-500">
        <span>Joined on:</span>
        <span className="font-medium text-blue-500">{createdAt}</span>
      </div>

      <button
        onClick={handleToggleFollow}
        className={`mt-4 px-10 py-2 rounded-full shadow-md transition duration-300 ${
          isFollowing
            ? "bg-gray-500 hover:bg-red-400 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </section>
  );
}

export default CandidateHeader;
