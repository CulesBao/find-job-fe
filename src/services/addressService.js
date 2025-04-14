import axiosPublic from "./axiosPublic";
import safeApiCall from "./safeApiCall";

export const getAllProvinces = () =>
  safeApiCall(() => axiosPublic.get("/provinces"));

export const getDistrictsByProvinceId = (provinceId) =>{
  return safeApiCall(() => axiosPublic.get(`/districts/${provinceId}`));
}
  
