function divisibleBy(n) {
  // your code here

  return function (a) {
    return a % n === 0; 
console.log('-----');
const isDivisibleByTwo = divisibleBy(2);
isDivisibleByTwo(2); // true
isDivisibleByTwo(3); // false
