import axiosPrivate from "./axiosPrivate";
import safeApiCall from "./safeApiCall";

export const createJob = (data) =>
  safeApiCall(() => {
    return axiosPrivate.post("/job/", data);
  }, true);

export const getJobById = (jobId) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/job/${jobId}`);
  });

export const updateJobById = (jobId, data) =>
  safeApiCall(() => {
    return axiosPrivate.put(`/job/${jobId}`, data);
  }, true);

export const getAllOwnerJobs = (page, size = 5) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/job/`, {
      params: {
        page: page,
        size: size,
      },
    });
  });
export const getJobByFilter = (filterData, page, size = 5) =>
  safeApiCall(() => {
    return axiosPrivate.post(`/job/filter`, filterData, {
      params: {
        page: page,
        size: size,
      },
    });
  });
