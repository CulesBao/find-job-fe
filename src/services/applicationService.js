import axiosPrivate from "./axiosPrivate";
import safeApiCall from "./safeApiCall";

export const createApplication = (file, coverLetter, jobId) =>
  safeApiCall(() => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("cover_letter", coverLetter);
    formData.append("job_id", jobId);

    return axiosPrivate.post("/application/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  });

export const withdrawApplication = (applicationId) =>
  safeApiCall(() => {
    return axiosPrivate.put(`/application/${applicationId}/withdraw`);
  });

export const getCanddidateApplications = (page = 0, limit = 10) =>
  safeApiCall(() => {
    return axiosPrivate.get("/application/", {
      params: {
        page,
        limit,
      },
    });
  });

export const getEmployerApplications = (
  page = 0,
  limit = 10, //get all applications from employer view,
  jobId
) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/application/${jobId}`, {
      params: {
        page,
        limit,
      },
    });
  });
export const getApplicationById = (applicationId) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/application/${applicationId}`);
  });
export const updateApplicationStatus = (jobId, data) =>
  safeApiCall(() => {
    return axiosPrivate.put(`/application/job/${jobId}`, { data });
  });

export const getStatus = (jobId) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/application/job/${jobId}/status`);
  });
