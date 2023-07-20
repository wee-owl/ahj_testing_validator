/* eslint-disable no-cond-assign */
export default function checkLuhn(value) {
  let count = 0;
  let even = false;

  for (let i = value.length - 1; i >= 0; i -= 1) {
    let cur = parseInt(value.charAt(i), 10);
    if (even && (cur *= 2) > 9) cur -= 9;
    count += cur;
    even = !even;
  }
  return (count % 10) === 0;
}
