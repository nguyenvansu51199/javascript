export function randomNumber(a, b) {
  if (a >= b) return -1;
  const random = Math.random() * (b - a);
  const result = Math.round(random) + a;

  return result;
}

// console.log(randomNumber(3, 50));
// console.log(randomNumber(200, 400));
// console.log(randomNumber(10, 1000));
// console.log(randomNumber(1, 4));
// console.log(randomNumber(3, 99));
