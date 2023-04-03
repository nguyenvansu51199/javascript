//v1
function findFirstEven(numberList) {
  if (!Array.isArray) return -1;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) return i;
  }

  return -1;
}

console.log(findFirstEven([1, 2, 3]));
console.log(findFirstEven([10, 2, 3]));
console.log(findFirstEven([1, 3, 9]));
console.log(findFirstEven([1, 3, 90]));

//v2
function findFirstEven(numberList) {
  if (!Array.isArray) return -1;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) return i;
  }

  return -1;
}

console.log(findFirstEven([1, 2, 3]));
console.log(findFirstEven([10, 2, 3]));
console.log(findFirstEven([1, 3, 9]));
console.log(findFirstEven([1, 3, 90]));

//v3
function findFirstEven(numberList, callbackFn) {
  if (!Array.isArray) return -1;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (callbackFn(number, i)) return i;
  }

  return -1;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(findFirstEven([1, 2, 3], isEven));
console.log(
  findFirstEven([10, 2, 3], function isEven(number) {
    return number % 2 === 0;
  })
);
console.log(
  findFirstEven([1, 3, 9], function (number) {
    return number % 2 === 0;
  })
);
console.log(
  findFirstEven([1, 3, 90], (number) => {
    return number % 2 === 0;
  })
);
