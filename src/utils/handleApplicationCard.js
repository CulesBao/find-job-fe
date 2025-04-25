import { formatEducation } from "@/constants/Education";
import handleLongString from "./handleLongString";
import { formatDate } from "./formatDate";

export default function handleApplicationCard(application) {
  return {
    id: application.id,
    fullName: handleLongString(
      application.first_name + " " + application.last_name,
      20
    ),
    avatarUrl: application.avatar_url,
    education: formatEducation(application.education),
    jobProcess: application.job_proccess,
    createdAt: formatDate(application.created_at.split("T")[0]),
  };
}
