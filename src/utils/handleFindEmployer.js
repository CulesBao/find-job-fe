import handleLongString from "./handleLongString";

export function handleFindEmployer(employer) {
  const { name, location, job_count } = employer;

  return {
    id: employer.id,
    logoUrl: employer.logo_url,
    name: handleLongString(name, 70),
    location,
    jobCount: `${job_count} jobs available`,
  };
}

export function handleFindEmployerForShortCard(employer) {
  const { name, location, job_count } = employer;

  return {
    id: employer.id,
    logoUrl: employer.logo_url,
    name: handleLongString(name, 20),
    location: handleLongString(location, 25),
    jobCount: `${job_count} jobs available`,
  };
}
