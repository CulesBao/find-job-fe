import { useState } from "react";

const useCandidateProfileProvider = () => {
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

  const [avatar, setAvatar] = useState(null);
  const [socialLinks, setSocialLinks] = useState([]);

  return {
    basicCandidateProfile,
    setBasicCandidateProfile,
    avatar,
    setAvatar,
    socialLinks,
    setSocialLinks,
  };
};

export default useCandidateProfileProvider;
