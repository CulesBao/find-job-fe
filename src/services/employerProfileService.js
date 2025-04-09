import axiosPrivate from "./axiosPrivate";
import safeApiCall from "./safeApiCall";

export const createEmployerProfile = (data) =>
  safeApiCall(() => axiosPrivate.post("/employer-profile", data));

export const getEmployerProfile = (employerProfileId) =>
  safeApiCall(() => axiosPrivate.get(`/employer-profile/${employerProfileId}`));

export const updateEmployerProfile = (data) =>
  safeApiCall(() => axiosPrivate.put("/employer-profile", data));

export const updateEmployerProfileLogo = (data) =>
  safeApiCall(() =>
    axiosPrivate.put("/employer-profile/logo", data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
