import Currency from "@/constants/Currency";

export default function handleFindJob(job) {
  const { name, title, min_salary, max_salary, currency, expired_at } = job;
  const handleEmployerName = name
    ? name.length > 20
      ? name.slice(0, 20) + "..."
      : name
    : "Unknown";
  const handleTitle = title
    ? title.length > 20
      ? title.slice(0, 20) + "..."
      : title
    : "Unknown";

  const today = new Date();
  const expiredDate = new Date(expired_at);
  const dayLeft = Math.ceil((expiredDate - today) / (1000 * 60 * 60 * 24));
  const handleCurrency = Currency[currency]?.symbol || currency;

  const handleSalary = (min_salary, max_salary, currency) => {
    if (min_salary >= 1e9 && max_salary >= 1e9) {
      return `${(min_salary / 1e9).toFixed(2)} - ${(max_salary / 1e9).toFixed(
        2
      )} B ${currency}`;
    }
    if (min_salary >= 1e6 && max_salary >= 1e6) {
      return `${(min_salary / 1e6).toFixed(2)} - ${(max_salary / 1e6).toFixed(
        2
      )} M ${currency}`;
    }
    if (min_salary >= 1e3 && max_salary >= 1e3) {
      return `${(min_salary / 1e3).toFixed(2)} - ${(max_salary / 1e3).toFixed(
        2
      )} K ${currency}`;
    }
    return `${min_salary} - ${max_salary} ${currency}`;
  };

  return {
    id: job.id,
    logoUrl: job.logo_url,
    employerName: handleEmployerName,
    location: job.location,
    jobTitle: handleTitle,
    salaryRange: handleSalary(min_salary, max_salary, handleCurrency),
    dayLeft: dayLeft > 0 ? dayLeft : 0,
  };
}
