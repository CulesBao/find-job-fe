import axiosPrivate from "./axiosPrivate";
import axiosPublic from "./axiosPublic";
import safeApiCall from "./safeApiCall";

export const createCandidateProfile = (data) =>
  safeApiCall(() => axiosPrivate.post("/candidate-profile/", data), true);

export const getCandidateProfile = (candidateProfileId) => {
  return safeApiCall(() =>
    axiosPublic.get(`/candidate-profile/${candidateProfileId}`)
  );
};

export const updateSocialLinks = (social_links) => {
  return safeApiCall(
    () => axiosPrivate.put("/candidate-profile/social-links", { social_links }),
    true
  );
};

export const updateCandidateProfile = (data) =>
  safeApiCall(() => axiosPrivate.put("/candidate-profile/", data), true);

export const updateCandidateProfileAvatar = (file) => {
  const formData = new FormData();
  formData.append("avatar", file);
  return safeApiCall(
    () =>
      axiosPrivate.put("/candidate-profile/update-avatar", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    true
  );
};

export const filterCandidateProfile = (filter, page = 0, size = 10) => {
  return safeApiCall(() =>
    axiosPrivate.get("/candidate-profile/filter", {
      params: {
        firstName: filter.firstName,
        lastName: filter.lastName,
        education: filter.education,
        provinceCode: filter.provinceCode,
        gender: filter.gender,
        page,
        size,
      },
    })
  );
};
