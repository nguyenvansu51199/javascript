function findSumPair(numberList, targetSum) {
  // your code here
  if (typeof numberList !== "object" || numberList.length === 0) return [];
  const resultArray = [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    for (let y = i + 1; y < numberList.length; y++) {
      if (number + numberList[y] === targetSum) {
        resultArray.push(number, numberList[y]);
      }
    }
  }

  return resultArray.sort((a, b) => a - b);
}

console.log(findSumPair([3, 2, 1], 5));
console.log(findSumPair([3, 3, 1, 2], 6));
