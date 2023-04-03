function randomNumber(a, b) {
  if (a >= b) return -1;

  const random = Math.random() * (b - a);
  return Math.round(random) + a;
}

console.log(randomNumber(10, 20));
console.log(randomNumber(10, 100));
console.log(randomNumber(400, 500));
