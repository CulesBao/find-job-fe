import JobType from "@/constants/JobType";
import { formatDate } from "./formatDate";

export default function handleViewJob(job) {
  const { title, job_type, expired_at, ...rest } = job;
  const handleTitle = title
    ? title.length > 20
      ? title.slice(0, 20) + "..."
      : title
    : "Unknown";

  const handleJobType = JobType[job_type]?.name || "Unknown";

  const handleExpiredAt = formatDate(expired_at.split("T")[0]);

  const today = new Date();
  const expiredDate = new Date(expired_at);
  const dayLeft = Math.ceil((expiredDate - today) / (1000 * 60 * 60 * 24));

  const isActive = expiredDate > today;

  return {
    title: handleTitle,
    jobType: handleJobType,
    expiredAt: handleExpiredAt,
    dayLeft: dayLeft > 0 ? dayLeft : 0,
    isActive,
    ...rest,
  };
}
