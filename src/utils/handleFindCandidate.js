import { formatEducation } from "@/constants/Education";
import handleLongString from "./handleLongString";

export function handleFindCandidate(candidate) {
  const { first_name, last_name, location, education, gender } = candidate;

  return {
    id: candidate.id,
    avatarUrl: candidate.avatar_url,
    fullName: `${first_name} ${last_name}`,
    location,
    education: formatEducation(education),
    gender: gender ? "Male" : "Female",
  };
}

export function handleFindCandidateForShortCard(candidate) {
  const { first_name, last_name, location, education, gender } = candidate;

  return {
    id: candidate.id,
    avatarUrl: candidate.avatar_url,
    fullName: handleLongString(`${first_name} ${last_name}`, 15),
    location,
    education: formatEducation(education),
    gender: gender ? "Male" : "Female",
  };
}
