const Currency = {
  USD: {
    name: "United States Dollar",
    symbol: "$",
    code: "USD",
  },
  EUR: {
    name: "Euro",
    symbol: "€",
    code: "EUR",
  },
  JPY: {
    name: "Japanese Yen",
    symbol: "¥",
    code: "JPY",
  },
  GBP: {
    name: "British Pound Sterling",
    symbol: "£",
    code: "GBP",
  },
  AUD: {
    name: "Australian Dollar",
    symbol: "A$",
    code: "AUD",
  },
  CAD: {
    name: "Canadian Dollar",
    symbol: "C$",
    code: "CAD",
  },
  CHF: {
    name: "Swiss Franc",
    symbol: "CHF",
    code: "CHF",
  },
  CNY: {
    name: "Chinese Yuan",
    symbol: "¥",
    code: "CNY",
  },
  HKD: {
    name: "Hong Kong Dollar",
    symbol: "HK$",
    code: "HKD",
  },
  SGD: {
    name: "Singapore Dollar",
    symbol: "S$",
    code: "SGD",
  },
  KRW: {
    name: "South Korean Won",
    symbol: "₩",
    code: "KRW",
  },
  IND: {
    name: "Indian Rupee",
    symbol: "₹",
    code: "INR",
  },
  VND: {
    name: "Vietnamese Dong",
    symbol: "₫",
    code: "VND",
  },
};

export const formatSalary = (minSalary, maxSalary, currency) => {
  const formatCurrency = Currency[currency] || Currency.USD;

  const abbreviateNumber = (number) => {
    if (number >= 1e9) return `${(number / 1e9).toFixed(1)}B`;
    if (number >= 1e6) return `${(number / 1e6).toFixed(1)}M`;
    if (number >= 1e3) return `${(number / 1e3).toFixed(1)}K`;
    if (number < 1e3) return number.toFixed(0);
    return number.toString();
  };

  const formattedMinSalary = `${abbreviateNumber(minSalary)} ${
    formatCurrency.symbol
  }`;
  const formattedMaxSalary = `${abbreviateNumber(maxSalary)} ${
    formatCurrency.symbol
  }`;

  return { formattedMinSalary, formattedMaxSalary };
};
export default Currency;
