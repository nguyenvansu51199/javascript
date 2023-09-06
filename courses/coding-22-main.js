function isAllPerfectNumbersV1(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let newArray = [];
  let result = 0;
  for (let i = 0; i < numberList.length; i++) {
    const element = numberList[i];
    for (let x = 1; x < element; x++) {
      if (element % x === 0) {
        newArray.push(x);
      }
    }

    for (let y = 0; y < newArray.length; y++) {
      const elementN = newArray[y];
      result += elementN;
    }

    if (result / numberList[i] !== 1) return false;
  }

  return true;
}

console.log(isAllPerfectNumbersV1([1, 2, 3]));
console.log(isAllPerfectNumbersV1([8]));
console.log(isAllPerfectNumbersV1([16]));
console.log(isAllPerfectNumbersV1([6]));
console.log(isAllPerfectNumbersV1([28, 3]));
console.log(isAllPerfectNumbersV1([5]));
console.log(isAllPerfectNumbersV1([8128]));

////
function isAllPerfectNumbersV3(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let newArray = [];
  let result = 0;

  for (let i = 0; i < numberList.length; i++) {
    const element = numberList[i];
    for (let x = 1; x < element; x++) {
      if (element % x === 0) {
        newArray.push(x);
      }
    }
    
    // newArray.every((x) => {if ((result += x) / numberList[i] !== 1) {
    //   return false;
    // }})
  }
}

console.log(isAllPerfectNumbersV3([1, 2, 3]));
console.log(isAllPerfectNumbersV3([8]));
console.log(isAllPerfectNumbersV3([16]));
console.log(isAllPerfectNumbersV3([6]));
console.log(isAllPerfectNumbersV3([28, 3]));
console.log(isAllPerfectNumbersV3([5]));
console.log(isAllPerfectNumbersV3([8128]));


//
function isAllPerfectNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let result = 0;

  for (let i = 0; i < numberList.length; i++) {
    numberList.every((x) => {return ((result += x) / numberList[i] !== 1) ? false : true })
  }
}

console.log(isAllPerfectNumbersV3([1, 2, 3]));
console.log(isAllPerfectNumbersV3([8]));
console.log(isAllPerfectNumbersV3([16]));
console.log(isAllPerfectNumbersV3([6]));
console.log(isAllPerfectNumbersV3([28, 3]));
console.log(isAllPerfectNumbersV3([5]));
console.log(isAllPerfectNumbersV3([8128]));
