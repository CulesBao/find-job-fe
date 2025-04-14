const SalaryType = {
  HOURLY: {
    name: "Hourly",
    description: "Paid based on the number of hours worked.",
    upperCaseName: "HOURLY",
  },
  DAILY: {
    name: "Daily",
    description: "Paid based on the number of days worked.",
    upperCaseName: "DAILY",
  },
  WEEKLY: {
    name: "Weekly",
    description: "Paid on a weekly basis.",
    upperCaseName: "WEEKLY",
  },
  MONTHLY: {
    name: "Monthly",
    description: "Paid on a monthly basis.",
    upperCaseName: "MONTHLY",
  },
  ANNUAL: {
    name: "Annual",
    description: "Paid on an annual basis.",
    upperCaseName: "ANNUAL",
  },
  COMMISSION: {
    name: "Commission",
    description: "Paid based on sales or performance.",
    upperCaseName: "COMMISSION",
  },
  PIECE_RATE: {
    name: "Piece Rate",
    description: "Paid based on the number of items produced.",
    upperCaseName: "PIECE_RATE",
  },
  BONUS: {
    name: "Bonus",
    description: "Additional payment as a reward for performance.",
    upperCaseName: "BONUS",
  },
  CONTRACT: {
    name: "Contract",
    description: "Paid based on a fixed contract agreement.",
    upperCaseName: "CONTRACT",
  },
  PROFIT_SHARING: {
    name: "Profit Sharing",
    description: "Paid based on a share of the company's profits.",
    upperCaseName: "PROFIT_SHARING",
  },
};

export default SalaryType;
