export const formatDate = (dateString) => {
  return dateString
    ? new Date(dateString).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "Unknown";
};
