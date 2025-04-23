export default function handleDayLeft(expiredAt) {
  const today = new Date();
  const expiredDate = new Date(expiredAt);
  const dayLeft = Math.ceil((expiredDate - today) / (1000 * 60 * 60 * 24));

  return dayLeft >= 0 ? `${dayLeft} days left` : "Expired";
}
