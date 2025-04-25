import axiosPrivate from "./axiosPrivate";
import safeApiCall from "./safeApiCall";

export const getMyAccount = () =>
  safeApiCall(() => axiosPrivate.get("/account/"));
export const resetPassword = (data) =>
  safeApiCall(() => axiosPrivate.put("/account/reset-password", data), true);
