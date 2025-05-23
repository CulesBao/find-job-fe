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
  }, true);

export const withdrawApplication = (applicationId) =>
  safeApiCall(() => {
    return axiosPrivate.put(`/application/${applicationId}/withdraw`);
  }, true);

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
  jobId,
  jobProcess,
  page = 0,
  limit = 10
) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/application/job/${jobId}`, {
      params: {
        jobProcess,
        page,
        limit,
      },
    });
  });
export const getApplicationById = (applicationId) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/application/${applicationId}`);
  });
export const updateApplicationStatus = (jobId, applications) => {
  return safeApiCall(() => {
    return axiosPrivate.put(`/application/job/${jobId}`, { applications });
  }, true);
};

export const getStatus = (jobId) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/application/job/${jobId}/status`);
  });
