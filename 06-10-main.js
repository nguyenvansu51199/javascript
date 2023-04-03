//1. Convert hours to seconds

function convertHoursToSeconds(hours) {
  if (hours < 0) return -1;

  const SECONDS_PER_HOUR = 3600;
  return hours * SECONDS_PER_HOUR;
}

console.log(convertHoursToSeconds(0));
console.log(convertHoursToSeconds(1.6));
console.log(convertHoursToSeconds(2));

// 2. Given 3 numbers, find max

function findMax(a, b, c) {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}

console.log(findMax(1, 2, 3));
console.log(findMax(4, 2, 3));
console.log(findMax(1, 8, 3));

// 3. Given 3 numbers, find max even number

function findMaxEvenNumber(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;

  if (a > max && a % 2 === 0) max = a;
  if (b > max && b % 2 === 0) max = b;
  if (c > max && c % 2 === 0) max = c;

  return max;
}

console.log(findMaxEvenNumber(1, 2, 5));
console.log(findMaxEvenNumber(-1, 3, 5));
console.log(findMaxEvenNumber(1, 2, 50));
