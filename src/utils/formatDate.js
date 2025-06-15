export const formatDate = (dateString) => {
  if (!dateString) return "Unknown";
  let dateObj;
  if (!isNaN(Date.parse(dateString))) {
    dateObj = new Date(dateString);
  } else {
    const normalized = dateString.replace(" ", "T").replace(/\.\d+$/, "");
    if (!isNaN(Date.parse(normalized))) {
      dateObj = new Date(normalized);
    } else {
      return "Unknown";
    }
  }
  return dateObj.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
