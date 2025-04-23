import handleDayLeft from "./handleDayLeft";
import handleLongString from "./handleLongString";
import handleSalaryAndCurrency from "./handleSalaryAndCurrency";

export default function handleFindJob(job) {
  const { name, title, min_salary, max_salary, currency, expired_at } = job;

  return {
    id: job.id,
    logoUrl: job.logo_url,
    employerName: handleLongString(name),
    location: job.location,
    jobTitle: handleLongString(title),
    salaryRange: handleSalaryAndCurrency(min_salary, max_salary, currency),
    dayLeft: handleDayLeft(expired_at),
  };
}
