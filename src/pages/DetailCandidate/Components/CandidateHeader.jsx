import { useAuth } from "@/hooks/useAuth";
import {
  followCandidate,
  isFollowed,
  unfollowCandidate,
} from "@/services/employerFollowerService";
import { useEffect, useState } from "react";
import FollowButton from "@/components/button/FollowedButton";

function CandidateHeader({ candidateId, avatarUrl, fullName, createdAt }) {
  const { user } = useAuth();
  const [isFollowing, setIsFollowing] = useState(false);

  const handleToggleFollow = () => {
    const toggleFollow = async () => {
      if (!isFollowing) {
        const response = await followCandidate(candidateId);
        if (response.status === 200) {
          setIsFollowing(true);
        }
      } else {
        const response = await unfollowCandidate(candidateId);
        if (response.status === 200) {
          setIsFollowing(false);
        }
      }
    };
    toggleFollow();
  };

  useEffect(() => {
    const checkFollowStatus = async () => {
      const response = await isFollowed(candidateId);
      setIsFollowing(response.data);
    };

    if (user?.role === "EMPLOYER") {
      checkFollowStatus();
    }
  }, [candidateId, user]);

  return (
    <section className="flex flex-col items-center text-center w-full p-6 bg-white rounded-2xl">
      <img
        src={avatarUrl}
        className="w-70 h-70 rounded-full object-cover mb-4"
        alt="Candidate avatar"
      />
      <h2 className="text-3xl font-semibold text-zinc-900 hover:text-blue-500">
        {fullName}
      </h2>
      <span className="px-2 py-1 mt-2 text-sm text-green-600 bg-green-50 rounded-full">
        Candidate
      </span>
      <div className="flex items-center gap-1 mt-4 text-sm text-gray-500">
        <span>Joined on:</span>
        <span className="font-medium text-blue-500">{createdAt}</span>
      </div>

      {user?.role === "EMPLOYER" && (
        <FollowButton
          isFollowing={isFollowing}
          onToggleFollow={handleToggleFollow}
        />
      )}
    </section>
  );
}

export default CandidateHeader;
