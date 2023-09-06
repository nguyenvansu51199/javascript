//
function findMaxI(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let max = numberList[0];
  for (let i = 0; i < numberList.length; i++) {
    if (max < numberList[i]) max = numberList[i];
  }

  return max;
}

console.log(findMaxI([1, 2, 4, 6, 11]));
console.log(findMaxI([1, 2, 4, 33, 11]));

//

function findMaxEach(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let max = numberList[0];
  numberList.forEach((number) => {
    if (number > max) {
      max = number;
    }
  });
  return max;
}

console.log(findMaxEach([1, 2, 3, 6]));

//
