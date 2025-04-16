import axiosPrivate from "./axiosPrivate";
import safeApiCall from "./safeApiCall";

export const createEmployerProfile = (data) =>
  safeApiCall(() => axiosPrivate.post("/employer-profile/", data));

export const getEmployerProfile = (employerProfileId) =>
  safeApiCall(() => axiosPrivate.get(`/employer-profile/${employerProfileId}`));

export const updateEmployerProfile = (data) =>
  safeApiCall(() => axiosPrivate.put("/employer-profile", data));

export const updateSocialLinks = (social_links) => {
  console.log("social_links", social_links);
  return safeApiCall(() =>
    axiosPrivate.put("/employer-profile/social-links", { social_links })
  );
};

export const updateCandidateProfile = (data) =>
  safeApiCall(() => axiosPrivate.put("/candidate-profile", data));

export const updateCandidateProfileAvatar = (file) => {
  const formData = new FormData();
  formData.append("logo", file);
  return safeApiCall(() =>
    axiosPrivate.put("/candidate-profile/update-avatar", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
};
