//v1
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) return number;
  }

  return undefined;
}

console.log(findFirstEven([1, 2, 3]));
console.log(findFirstEven([1, 5, 3]));
console.log(findFirstEven([1, 1, 8]));
console.log(findFirstEven([4, 1, 8]));

//v2
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  let firstEven;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) {
      firstEven = number;
      break;
    }
  }

  return firstEven;
}

console.log(findFirstEven([1, 2, 3]));
console.log(findFirstEven([1, 5, 3]));
console.log(findFirstEven([1, 1, 8]));
console.log(findFirstEven([4, 1, 8]));

//v3
function findFirstEven(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callbackFn(number, i)) {
      return number;
    }
  }

  return undefined;
}
function isEven(number) {
  return number % 2 === 0;
}

console.log(findFirstEven([1, 2, 3], isEven));

//v3

function findFirstEven(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callbackFn(number, i)) {
      return number;
    }
  }

  return undefined;
}

function isEven(number) {
  return number % 2 === 0;
}

function isDivideFive(number) {
  return number % 5 === 0;
}

console.log(findFirstEven([1, 2, 3], isEven));
console.log(findFirstEven([1, 2, 10], isDivideFive));

//v4
function findFirstEven(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callbackFn(number, i)) {
      return number;
    }
  }

  return undefined;
}

function isEven(number) {
  return number % 2 === 0;
}

function isDivideFive(number) {
  return number % 5 === 0;
}

console.log(findFirstEven([1, 2, 3], isEven));
console.log(findFirstEven([1, 2, 10], isDivideFive));
