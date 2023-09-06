// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
export function calcSum(n) {
  if (n <= 0) return 0;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

//v2
export function calcSumV2(n) {
  if (n <= 0) return 0;

  const sum = (n * (n + 1)) / 2;

  return sum;
}

//v3
export function calcSumV3(n) {
  if (n <= 0) return 0;

  let sum = 0;
  const newArray = Array.from({ length: n }, (_, index) => index);
  newArray.forEach((i) => (sum += i));

  return sum;
}

//v4

export function calcSumV4(n) {
  if (n <= 0) return 0;

  let sum = 0;
  const newArray = Array.from({ length: n + 1 }, (_, index) => index);
  return newArray.reduce((sum, number) => sum + number);
}
