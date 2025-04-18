import axiosPrivate from "./axiosPrivate";
import safeApiCall from "./safeApiCall";

export const createJob = (data) =>
  safeApiCall(() => {
    return axiosPrivate.post("/job/", data);
  });

export const getJobById = (jobId) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/job/${jobId}`);
  });

export const updateJobById = (jobId, data) =>
  safeApiCall(() => {
    return axiosPrivate.put(`/job/${jobId}`, data);
  });

export const getAllOwnerJobs = (ownerId) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/job/${ownerId}`);
  });
export const getJobByFilter = (filterData) =>
  safeApiCall(() => {
    return axiosPrivate.post(`/job/filter`, filterData);
  });
