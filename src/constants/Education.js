const Education = {
  HIGH_SCHOOL: {
    name: "High school",
    upperCaseName: "HIGH_SCHOOL",
  },
  INTERMEDIATE: {
    name: "Intermediate",
    upperCaseName: "INTERMEDIATE",
  },
  GRADUATION: {
    name: "Graduation",
    upperCaseName: "GRADUATION",
  },
  MASTER_DEGREE: {
    name: "Master's degree",
    upperCaseName: "MASTER_DEGREE",
  },
  BACHELOR_DEGREE: {
    name: "Bachelor's degree",
    upperCaseName: "BACHELOR_DEGREE",
  },
};
export const formatEducation = (education) => {
  return education ? Education[education]?.name || "Unknown" : "Unknown";
};
export default Education;
