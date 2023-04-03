//  for...i
function hasPrimeV1(numberList) {
  // your code here
  let isValid;
  if (!Array.isArray(numberList)) return false;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number === 2) return true;
    // kiem tra so do co phai so nguyen to
    const sqrtNumber = Math.sqrt(number);
    for (let y = 2; y < sqrtNumber; y++) {
      if (number % y !== 0 && number % sqrtNumber !== 0 && number % 2 !== 0)
        return true;
      if (
        number % y !== 0 &&
        number % y === 0 &&
        number % sqrtNumber !== 0 &&
        number % 2 !== 0
      )
        return false;
    }
    return isValid;
  }
}

console.log(hasPrimeV1([4, 2]));
console.log(hasPrimeV1([23]));
console.log(hasPrimeV1([21]));
console.log(hasPrimeV1([15]));



//  for...i
function hasPrimeV1(numberList) {
  // your code here
  let newArray1 = [];
  let newArray2 = [];
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number === 2) return true;
    // kiem tra so do co phai so nguyen to
    const sqrtNumber = Math.sqrt(number);
    for (let y = 2; y < sqrtNumber; y++) {
      if (number % sqrtNumber !== 0 && number % 2 !== 0 && number % y !== 0) {
        newArray1.push(number);
        break;
      }
    }

    if (newArray1.length === 0) return false;

    for (let x = 0; x < newArray1.length; x++) {
      const element = newArray1[x];
      const sqrtNumberA = Math.sqrt(element);
      for (let z = 2; z < sqrtNumberA; z++) {
        if (element % z === 0) {
          newArray2.push(element)
          break;
        };
      }
    }
    if (newArray1.length > newArray2.length) return true;
    if (newArray1.length <= newArray2.length) return false;
  }
}

console.log(hasPrimeV1([4, 2]));
console.log(hasPrimeV1([13]));
console.log(hasPrimeV1([13, 11,]));
console.log(hasPrimeV1([11, 7, 5, 3]));

//

