function calcAvgOfAllEvenNumbers(numberList) {
  // your code here
  if (!Array.isArray(numberList)) return 0; 

  let newArray = [];
  let result = 0;
  for (let i = 0; i < numberList.length; i++) {
    const element = numberList[i];
    if (element % 2 === 0) newArray.push(element);
  }
  if (newArray.length === 0) return 0;

  for (let y = 0; y < newArray.length; y++) {
    const elementN = newArray[y];
    result += elementN;
  }
  return Math.round((result / newArray.length));

}

console.log(calcAvgOfAllEvenNumbers([1, 2, 3, 4]));
console.log(calcAvgOfAllEvenNumbers([1, 2,]));
console.log(calcAvgOfAllEvenNumbers([4, 2,]));
console.log(calcAvgOfAllEvenNumbers([4, 2, 1, 8]));
console.log(calcAvgOfAllEvenNumbers([1]));