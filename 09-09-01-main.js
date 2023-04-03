function findFirstEven(numberList) {
  if (!Array.isArray) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) {
      return number;
    }
  }

  return undefined;
}

console.log(findFirstEven([1, 2, 4]));
console.log(findFirstEven([10, 2, 4]));
console.log(findFirstEven([1, 3, 5]));
console.log(findFirstEven("15"));

//v2

function findFirstEven(numberList) {
  if (!Array.isArray) return undefined;
  let firstEven;
  for (i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) {
      firstEven = number;
      break;
    }
  }

  return firstEven;
}

console.log(findFirstEven([1, 2, 4]));
console.log(findFirstEven([10, 2, 4]));
console.log(findFirstEven([1, 3, 5]));
console.log(findFirstEven("15"));

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

console.log(findFirstEven([1, 2, 4], isEven));

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

console.log(findFirstEven([1, 2, 4], isEven));
console.log(
  findFirstEven([1, 2, 4], function isEven(number) {
    return number % 2 === 0;
  })
);
console.log(
  findFirstEven([1, 3, 4], function (number) {
    return number % 2 === 0;
  })
);
console.log(
  findFirstEven([1, 10, 4], (number) => {
    return number % 2 === 0;
  })
);
console.log(findFirstEven("321", isEven));

//v4
function findFirstEven(numberList, callbackFn) {
  if (!Array.isArray) return undefined;

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

console.log(findFirstEven([1, 2, 4], isEven));
console.log(
  findFirstEven([1, 2, 4], function isEven(number) {
    return number % 2 === 0;
  })
);
console.log(
  findFirstEven([1, 2, 4], function (number) {
    return number % 2 === 0;
  })
);
console.log(
  findFirstEven([1, 2, 4], (number) => {
    return number % 2 === 0;
  })
);

//vvv
function findFirstEvenNumber(arr) {
  if (!Array.isArray(arr)) return undefined;
  let result = undefined;
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];

    if (number % 2 === 0) result = number;
    return result;
  }

  return result;
}

console.log(findFirstEvenNumber([1, 1, 3]));
console.log(findFirstEvenNumber([4, 2, 3]));
console.log(findFirstEvenNumber([0, 2, 3]));

//v

function findFirstEvenNumber(arr, callbackFn) {
  if (!Array.isArray(arr)) return undefined;
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (callbackFn(number, i)) {
      return number;
    }
  }
}
function isEven(number) {
  return number % 2 === 0;
}

console.log(findFirstEvenNumber([4, 2, 3], isEven));
console.log(
  findFirstEvenNumber([4, 2, 3], function (number) {
    return number % 2 === 0;
  })
);
console.log(findFirstEvenNumber([4, 2, 3], (number) => number % 2 === 0));
