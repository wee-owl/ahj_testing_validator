export default function checkTitle(value, data) {
  const startDigit = Number(String(value).substring(0, 2));
  let title;
  for (const digit of data) {
    if (digit.start.includes(startDigit) && digit.length.includes(value.length)) {
      title = digit.title;
    }
  }
  return title;
}
