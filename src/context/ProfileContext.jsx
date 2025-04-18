import { createContext, useContext, useState } from "react";

const ProfileContext = createContext(null);

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within ProfileProvider");
  }
  return context;
};

export const ProfileProvider = ({ children }) => {
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
    location: "",
  });

  const [image, setImage] = useState(null);
  const [socialLinks, setSocialLinks] = useState([]);

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
