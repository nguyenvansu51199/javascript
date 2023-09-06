//every

//v1
// export function checkIfAllEvenV1(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;

//   for (let i = 0; i < numberList.length; i++) {
//     if (numberList[i] % 2 !== 0) return false;
//   }
//   return true;
// }

// console.log(checkIfAllEven([1, 2, 3]));
// console.log(checkIfAllEven([4, 2, 8]));
// console.log(checkIfAllEven([4, 2, 3]));

// function checkIfAllEvenV1(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return false;

//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];
//     if (isNumber(number, i)) return false;
//   }
//   return true;
// }

function isNumber(number) {
  return number % 2 === 0;
}

function checkIfAllEvenV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  return numberList.every((number) => isNumber(number));
}
console.log(checkIfAllEvenV2([4, 2, 8]));
console.log(checkIfAllEvenV2([4, 2, 3]));

console.log(checkIfAllEvenV2([1, 2, 3]));
