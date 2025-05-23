import axiosPrivate from "./axiosPrivate";
import safeApiCall from "./safeApiCall";

export const createEmployerProfile = (data) =>
  safeApiCall(() => axiosPrivate.post("/employer-profile/", data), true);

export const getEmployerProfile = (employerProfileId) => {
  return safeApiCall(() =>
    axiosPrivate.get(`/employer-profile/${employerProfileId}`)
  );
};

export const updateEmployerProfile = (data) =>
  safeApiCall(() => axiosPrivate.put("/employer-profile/", data), true);

export const updateEmployerSocialLinks = (social_links) => {
  return safeApiCall(
    () => axiosPrivate.put("/employer-profile/social-links", { social_links }),
    true
  );
};

export const updateEmployerLogo = (file) => {
  const formData = new FormData();
  formData.append("logo", file);
  return safeApiCall(
    () =>
      axiosPrivate.put("/employer-profile/update-logo", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    true
  );
};

export const filterEmployerProfile = (filter, page = 0, size = 10) => {
  return safeApiCall(() =>
    axiosPrivate.get("/employer-profile/filter", {
      params: {
        name: filter.name,
        provinceCode: filter.province_code,
        page,
        size,
      },
    })
  );
};
