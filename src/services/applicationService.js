import axiosPrivate from "./axiosPrivate";
import safeApiCall from "./safeApiCall";

export const createApplication = (file, coverLetter, jobId) =>
  safeApiCall(() => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("cover_letter", coverLetter);
    formData.append("job_id", jobId);

    return axiosPrivate.post("/applications", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  });

export const withdrawApplication = (applicationId) =>
  safeApiCall(() => {
    return axiosPrivate.put(`/applications/${applicationId}/withdraw`);
  });

export const getCanddidateApplications = (
  page = 0,
  limit = 10 //get all applications of candidate view
) =>
  safeApiCall(() => {
    return axiosPrivate.get("/applications", {
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
    return axiosPrivate.get(`/applications/${jobId}`, {
      params: {
        page,
        limit,
      },
    });
  });
export const getApplicationById = (applicationId) =>
  safeApiCall(() => {
    return axiosPrivate.get(`/applications/${applicationId}`);
  });
export const updateApplicationStatus = (jobId, data) =>
  safeApiCall(() => {
    return axiosPrivate.put(`/applications/job/${jobId}`, { data });
  });
