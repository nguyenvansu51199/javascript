// 1. Write a function to check if a number is odd/even
function checkNumberOfEven(n) {
  let result = "Odd";

  if (n % 2 === 0) {
    result = "Even";
  }
  return result;
}

console.log(checkNumberOfEven(2));
console.log(checkNumberOfEven(4));
console.log(checkNumberOfEven(5));
console.log(checkNumberOfEven(1));

//v2

function checkNumber(n) {
  let result = "Odd";
  if (n % 2 === 0) result = "Even";
  return result;
}

console.log(checkNumber(2));
console.log(checkNumber(4));
console.log(checkNumber(5));
console.log(checkNumber(1));

//v3

function checkNumberOfEven(n) {
  let result = "False";

  if (n % 2 === 0) result = "True";
  return result;
}

console.log(checkNumberOfEven(0));
console.log(checkNumberOfEven(4));
console.log(checkNumberOfEven(5));
console.log(checkNumberOfEven(1));

//v4

function checkNumberOfEven(n) {
  return n % 2 === 0;
}

console.log(checkNumberOfEven(0));
console.log(checkNumberOfEven(4));
console.log(checkNumberOfEven(5));
console.log(checkNumberOfEven(1));

//v5
function checkNumberOfOdd(n) {
  return n % 2 === 1;
}

console.log(checkNumberOfOdd(12));
console.log(checkNumberOfOdd(11));
console.log(checkNumberOfOdd(1));
console.log(checkNumberOfOdd(-4));
console.log(checkNumberOfOdd(0));

//Write a function to check if a number is divisible by
function isDivideBy5(n) {
  return n % 5 === 0;
}

console.log(isDivideBy5(1));
console.log(isDivideBy5(5));
console.log(isDivideBy5(10));
console.log(isDivideBy5(-3));

// 3. Write a function to check if a number is perfect squar

function isPerfectSquar(n) {
  if (n <= 0) return false;

  const sqrtN = Math.sqrt(n);
  const sqrtNInt = Math.trunc(sqrtN);
  return sqrtNInt * sqrtNInt === n;
}

console.log(isPerfectSquar(4));
console.log(isPerfectSquar(15));
console.log(isPerfectSquar(9));
console.log(isPerfectSquar(3));
console.log(isPerfectSquar(-3));
