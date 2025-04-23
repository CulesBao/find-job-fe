import axiosPrivate from "./axiosPrivate";
import safeApiCall from "./safeApiCall";

export const followEmployer = async (employerId) =>
  safeApiCall(() => {
    return axiosPrivate.put(`/candidates/followers/${employerId}`);
  });

export const unfollowEmployer = async (employerId) =>
  safeApiCall(() => {
    return axiosPrivate.delete(`/candidates/followers/${employerId}`);
  });

export const isFollowed = async (employerId) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/candidates/followers/${employerId}`);
  });
