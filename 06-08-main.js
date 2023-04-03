function calcAreaOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a * b;
}

console.log(calcAreaOfRectangle(2, 3));
console.log(calcAreaOfRectangle(4, 3));
console.log(calcAreaOfRectangle(4, -3));

function calcPerimeterOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  const result = (a + b) / 2;

  return result;
}

console.log(calcPerimeterOfRectangle(3, 5));
