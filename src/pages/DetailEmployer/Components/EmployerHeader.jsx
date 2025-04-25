import FollowButton from "@/components/button/FollowedButton";
import SendMailButton from "@/components/button/SendMailButton";
import { useAuth } from "@/hooks/useAuth";
import {
  followEmployer,
  isFollowed,
  unfollowEmployer,
} from "@/services/candidateFollowerService";
import { useEffect, useState } from "react";

function EmployerHeader({
  employerId,
  logoUrl,
  companyName,
  createdAt,
  email,
}) {
  const [isFollowing, setIsFollowing] = useState(false);
  const { user } = useAuth();

  const handleToggleFollow = () => {
    const toggleFollow = async () => {
      if (!isFollowing) {
        const response = await followEmployer(employerId);
        if (response.status === 200) {
          setIsFollowing(true);
        }
      } else {
        const response = await unfollowEmployer(employerId);
        if (response.status === 200) {
          setIsFollowing(false);
        }
      }
    };
    toggleFollow();
  };

  useEffect(() => {
    const checkFollowStatus = async () => {
      try {
        const response = await isFollowed(employerId);
        setIsFollowing(response.data);
      } catch (error) {
        console.error("Error checking follow status:", error);
      }
    };

    if (user?.role === "CANDIDATE") {
      checkFollowStatus();
    }
  }, [employerId, user]);

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
      {user?.role === "CANDIDATE" && (
        <FollowButton
          isFollowing={isFollowing}
          onToggleFollow={handleToggleFollow}
        />
      )}
      <SendMailButton email={email} />
    </section>
  );
}

export default EmployerHeader;
