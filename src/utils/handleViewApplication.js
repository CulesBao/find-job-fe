import JobProcess from "@/constants/JobProccess";
import handleDayLeft from "./handleDayLeft";
import handleLongString from "./handleLongString";
import handleSalaryAndCurrency from "./handleSalaryAndCurrency";

export default function handleViewApplication(application) {
  const jobProcess =
    JobProcess[application?.job_proccess] ||
    JobProcess["APPLICATION_SUBMITTED"];
  return {
    applicationId: application.application_id,
    jobId: application.job_id,
    employerName: application.name,
    jobTitle: handleLongString(application.title),
    location: application.location,
    logoUrl: application.logo_url,
    salaryRange: handleSalaryAndCurrency(
      application.min_salary,
      application.max_salary,
      application.currency
    ),
    dayLeft: handleDayLeft(application.expired_at),
    jobProccess: {
      name: jobProcess.name,
      color: jobProcess.color,
    },
  };
}
