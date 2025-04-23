import axiosPrivate from "./axiosPrivate";
import safeApiCall from "./safeApiCall";

export const createEmployerProfile = (data) =>
  safeApiCall(() => axiosPrivate.post("/employer-profile/", data));

export const getEmployerProfile = (employerProfileId) => {
  return safeApiCall(() =>
    axiosPrivate.get(`/employer-profile/${employerProfileId}`)
  );
};

export const updateEmployerProfile = (data) =>
  safeApiCall(() => axiosPrivate.put("/employer-profile/", data));

export const updateSocialLinks = (social_links) => {
  return safeApiCall(() =>
    axiosPrivate.put("/employer-profile/social-links", { social_links })
  );
};

export const updateEmployerSocialLinks = (social_links) => {
  return safeApiCall(() =>
    axiosPrivate.put("/employer-profile/social-links", { social_links })
  );
};

export const updateEmployerLogo = (file) => {
  const formData = new FormData();
  formData.append("logo", file);
  return safeApiCall(() =>
    axiosPrivate.put("/employer-profile/update-logo", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
};
