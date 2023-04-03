//1. Convert hours to seconds
function convertHoursToSeconds(n) {
  if (n < 0) return -1;

  const HOUR_TO_SECOND = 3600;
  return n * HOUR_TO_SECOND;
}

console.log(convertHoursToSeconds(1));
console.log(convertHoursToSeconds(-1));
console.log(convertHoursToSeconds(2.5));

// 2. Given 3 numbers, find max
function findMax(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;

  if (a > max) max = a;
  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}

console.log(findMax(1, 3, 9));
console.log(findMax(1, 3, 0));
console.log(findMax(1, 3, 5));

// 3. Given 3 numbers, find max even number
function findMaxEvenNumber(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;

  if (a > max && a % 2 === 0) max = a;
  if (b > max && b % 2 === 0) max = b;
  if (c > max && c % 2 === 0) max = c;

  return max;
}

console.log(findMaxEvenNumber(1, 2, 3));
console.log(findMaxEvenNumber(1, 2, -3));
console.log(findMaxEvenNumber(1, -2, 3));
