function FollowButton({ isFollowing, onToggleFollow }) {
  return (
    <button
      onClick={onToggleFollow}
      className={`mt-4 px-10 py-2 rounded-full shadow-md transition duration-300 ${
        isFollowing
          ? "bg-gray-500 hover:bg-red-400 text-white"
          : "bg-blue-500 hover:bg-blue-600 text-white"
      }`}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
}

export default FollowButton;
