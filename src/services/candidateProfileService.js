import axiosPrivate from "./axiosPrivate";
import axiosPublic from "./axiosPublic";
import safeApiCall from "./safeApiCall";

export const createCandidateProfile = (data) =>
  safeApiCall(() => axiosPrivate.post("/candidate-profile/", data));

export const getCandidateProfile = (candidateProfileId) => {
  return safeApiCall(() =>
    axiosPublic.get(`/candidate-profile/${candidateProfileId}`)
  );
};

export const updateSocialLinks = (social_links) => {
  return safeApiCall(() =>
    axiosPrivate.put("/candidate-profile/social-links", { social_links })
  );
};

export const updateCandidateProfile = (data) =>
  safeApiCall(() => axiosPrivate.put("/candidate-profile", data));

export const updateCandidateProfileAvatar = (file) => {
  const formData = new FormData();
  formData.append("avatar", file);
  return safeApiCall(() =>
    axiosPrivate.put("/candidate-profile/update-avatar", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
};
