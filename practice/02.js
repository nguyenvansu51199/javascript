// Bài 2: Tính S(n) = 1^2 + 2^2 + … + n^2
export function calcSquareSum(n) {
  if (n <= 0) return 0;

  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i * i;
  }

  return result;
}
