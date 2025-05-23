import { useAuth } from "@/hooks/useAuth";
import { createContext, useContext, useState, useEffect } from "react";

const ProfileContext = createContext(null);

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within ProfileProvider");
  }
  return context;
};

export const ProfileProvider = ({ children }) => {
  const { user } = useAuth();
  console.log("user", user);
  const [basicCandidateProfile, setBasicCandidateProfile] = useState({
    bio: "",
    date_of_birth: "",
    education: "",
    first_name: "",
    gender: null,
    last_name: "",
    phone_number: "",
    province_code: "",
    district_code: "",
  });

  const [basicEmployerProfile, setBasicEmployerProfile] = useState({
    about: "",
    established_in: "",
    name: "",
    vision: "",
    website_url: "",
    province_code: "",
    district_code: "",
  });

  const [image, setImage] = useState(null);

  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    if (user) {
      setBasicCandidateProfile({
        bio: user?.candidate_profile?.bio || "",
        date_of_birth: user?.candidate_profile?.date_of_birth
          ? new Date(user.candidate_profile.date_of_birth)
              .toISOString()
              .split("T")[0]
          : "",
        education: user?.candidate_profile?.education || "",
        first_name: user?.candidate_profile?.first_name || "",
        gender: (user?.candidate_profile?.gender == true ? 1 : 0) || 0,
        last_name: user?.candidate_profile?.last_name || "",
        phone_number: user?.candidate_profile?.phone_number || "",
        province_code: user?.candidate_profile?.province?.code || "",
        district_code: user?.candidate_profile?.district?.code || "",
      });

      setBasicEmployerProfile({
        about: user?.employer_profile?.about || "",
        established_in: user?.employer_profile?.established_in
          ? new Date(user.employer_profile.established_in)
              .toISOString()
              .split("T")[0]
          : "",
        name: user?.employer_profile?.name || "",
        vision: user?.employer_profile?.vision || "",
        website_url: user?.employer_profile?.website_url || "",
        province_code: user?.employer_profile?.province?.code || "",
        district_code: user?.employer_profile?.district?.code || "",
        location: user?.employer_profile?.location || "",
      });

      setImage(
        user?.candidate_profile?.avatar_url ||
          user?.employer_profile?.logo_url ||
          null
      );

      setSocialLinks(
        user?.candidate_profile?.social_links ||
          user?.employer_profile?.social_links ||
          []
      );
    }
  }, [user]);

  return (
    <ProfileContext.Provider
      value={{
        basicCandidateProfile,
        setBasicCandidateProfile,
        image,
        setImage,
        socialLinks,
        setSocialLinks,
        basicEmployerProfile,
        setBasicEmployerProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
