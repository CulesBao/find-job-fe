export default function handleLongString(str, maxLength = 30) {
  if (!str) return "Unknown";
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}
