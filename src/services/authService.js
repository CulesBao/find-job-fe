import axiosPublic from "./axiosPublic";
import safeApiCall from "./safeApiCall";

export const register = (data) =>
  safeApiCall(() => axiosPublic.post("/auth/register", data));

export const login = (data) =>
  safeApiCall(() => axiosPublic.post("/auth/login", data));

export const verifyEmail = (accountId, data) => {
  return safeApiCall(() => axiosPublic.put(`/auth/verify/${accountId}`, data));
}
