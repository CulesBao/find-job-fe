import axiosPrivate from "./axiosPrivate";
import safeApiCall from "./safeApiCall";

export const followCandidate = async (candidateId) =>
  safeApiCall(() => {
    return axiosPrivate.put(`/employers/followers/${candidateId}`);
  });

export const unfollowCandidate = async (candidateId) =>
  safeApiCall(() => {
    return axiosPrivate.delete(`/employers/followers/${candidateId}`);
  });

export const isFollowed = async (candidateId) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/employers/followers/${candidateId}`);
  });

export const getFollowedCandidates = async (page, size) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/employers/followers/`, {
      params: {
        page: page,
        size: size,
      },
    });
  });
