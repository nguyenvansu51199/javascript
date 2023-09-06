function isPerfectNumber(n) {
  // your code here
  if (n < 1 || n > 1000) return false;

  let newArray = [];
  let result = false;
  for (let i = 1; i < n - 1; i++) {
    if (n % i === 0) newArray.push(i);
  }

  const sumNumbers = newArray.reduce((sum, number) => sum + number);
  if (sumNumbers === n) result = true;
  return result;
}

console.log(isPerfectNumber(6));