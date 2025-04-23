const SalaryType = {
  HOURLY: {
    name: "Hourly",
    upperCaseName: "HOURLY",
  },
  DAILY: {
    name: "Daily",
    upperCaseName: "DAILY",
  },
  WEEKLY: {
    name: "Weekly",
    upperCaseName: "WEEKLY",
  },
  MONTHLY: {
    name: "Monthly",
    upperCaseName: "MONTHLY",
  },
  ANNUAL: {
    name: "Annual",
    upperCaseName: "ANNUAL",
  },
  COMMISSION: {
    name: "Commission",
    upperCaseName: "COMMISSION",
  },
  PIECE_RATE: {
    name: "Piece Rate",
    upperCaseName: "PIECE_RATE",
  },
  BONUS: {
    name: "Bonus",
    upperCaseName: "BONUS",
  },
  CONTRACT: {
    name: "Contract",
    upperCaseName: "CONTRACT",
  },
  PROFIT_SHARING: {
    name: "Profit Sharing",
    upperCaseName: "PROFIT_SHARING",
  },
};
export const formatSalaryType = (salaryType) => {
  return salaryType ? SalaryType[salaryType]?.name : "Unknown";
};

export default SalaryType;
