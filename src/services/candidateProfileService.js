import axiosPrivate from "./axiosPrivate";
import axiosPublic from "./axiosPublic";
import safeApiCall from "./safeApiCall";

export const createCandidateProfile = (data) =>
  safeApiCall(() => axiosPrivate.post("/candidate-profile", data));

export const getCandidateProfile = (candidateProfileId) =>
  safeApiCall(() =>
    axiosPublic.get(`/candidate-profile/${candidateProfileId}`)
  );

export const updateSocialLinks = (data) =>
  safeApiCall(() => axiosPrivate.put("/candidate-profile/social-links", data));

export const updateCandidateProfile = (data) =>
  safeApiCall(() => axiosPrivate.put("/candidate-profile", data));

export const updateCandidateProfileAvatar = (data) =>
  safeApiCall(() =>
    axiosPrivate.put("/candidate-profile/avatar", data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
