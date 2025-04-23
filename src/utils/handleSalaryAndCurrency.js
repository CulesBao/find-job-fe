import Currency from "@/constants/Currency";

export default function handleSalaryAndCurrency(
  minSalary,
  maxSalary,
  currency
) {
  const formatCurrency = Currency[currency] || Currency.USD;

  const abbreviateNumber = (number) => {
    if (number >= 1e9) return `${(number / 1e9).toFixed(1)}B`;
    if (number >= 1e6) return `${(number / 1e6).toFixed(1)}M`;
    if (number >= 1e3) return `${(number / 1e3).toFixed(1)}K`;
    if (number < 1e3) return number.toFixed(0);
    return number?.toString();
  };

  const formattedMinSalary = `${abbreviateNumber(minSalary)} ${
    formatCurrency.symbol
  }`;
  const formattedMaxSalary = `${abbreviateNumber(maxSalary)} ${
    formatCurrency.symbol
  }`;

  return `${formattedMinSalary} - ${formattedMaxSalary}`;
}
