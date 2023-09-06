//  for...i
function hasPrimeV1(numberList) {
  // your code here
  let isValid = true;
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number === 2) return true;
    for (let j = 2; j <= Math.sqrt(number); j++) {
      if (number % j === 0) isValid = false;
    }
    if (isValid === true) return true;
  }
  return false;
}

console.log(hasPrimeV1([4, 2]));
console.log(hasPrimeV1([11, 6]));
console.log(hasPrimeV1([23]));
console.log(hasPrimeV1([21]));
console.log(hasPrimeV1([15]));

//  forEach
function hasPrimeV2(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let isValid = true;
  let result = false;
  numberList.forEach((number) => {
    for (let j = 2; j <= Math.sqrt(number); j++) {
      if (number % j === 0) isValid = false;
    }
    if (isValid === true) result = true;
  });
  return result;
}

console.log(hasPrimeV2([4, 2]));
console.log(hasPrimeV2([11, 6]));
console.log(hasPrimeV2([23]));
console.log(hasPrimeV2([21]));
console.log(hasPrimeV2([15]));

//  find
function hasPrimeV3(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let isValid = true;

  return Boolean(
    numberList.find((number) => {
      for (let j = 2; j <= Math.sqrt(number); j++) {
        if (number % j === 0) isValid = false;
      }
      if (isValid === true) return number;
    })
  );
}

console.log(hasPrimeV3([4, 2]));
console.log(hasPrimeV3([11, 6]));
console.log(hasPrimeV3([23]));
console.log(hasPrimeV3([21]));
console.log(hasPrimeV3([15]));

function hasPrimeV4(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let isValid = true;

  return (
    numberList.findIndex((number, idx) => {
      for (let j = 2; j <= Math.sqrt(number); j++) {
        if (number % j === 0) isValid = false;
      }
      if (isValid === true) return idx;
    }) > 0
  );
}

console.log(hasPrimeV4([4, 2]));
console.log(hasPrimeV4([11, 6]));
console.log(hasPrimeV4([23]));
console.log(hasPrimeV4([21]));
console.log(hasPrimeV4([15]));
