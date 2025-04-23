import { formatJobType } from "@/constants/JobType";
import { formatDate } from "./formatDate";
import handleLongString from "./handleLongString";
import handleDayLeft from "./handleDayLeft";

export default function handleViewJob(job) {
  const { title, job_type, expired_at, ...rest } = job;
  return {
    title: handleLongString(title),
    jobType: formatJobType(job_type),
    expiredAt: formatDate(expired_at.split("T")[0]),
    dayLeft: handleDayLeft(expired_at),
    isActive: handleDayLeft(expired_at) != "Expired" ? true : false,
    ...rest,
  };
}
