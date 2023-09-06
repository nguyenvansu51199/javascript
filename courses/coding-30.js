function mostFrequent(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  let mostFqNumber = numberList[0];
  let result = 0;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    let count = 0;
    for (let y = i; y < numberList.length; y++) {
      if (number === numberList[y]) {
        count += 1;
      }
    }
    if (count > result) {
      result = count;
      mostFqNumber = number;
    }
  }

  return mostFqNumber;
}

console.log(mostFrequent([1, 2, 2, 2, 3, 4, 5, 5, 5, 5, 6, 6, 2, 2, 5, 5]));
console.log(mostFrequent([1, 2, 2, 2, 3]));
console.log(mostFrequent([1, 2, 3]));
