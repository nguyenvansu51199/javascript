//every

//v1
export function checkIfAllEvenV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false;
  }
  return true;
}

// console.log(checkIfAllEven([1, 2, 3]));
// console.log(checkIfAllEven([4, 2, 8]));
// console.log(checkIfAllEven([4, 2, 3]));

//v2

function checkIfAllEvenV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  let isValid = true;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false;
  }
  return isValid;
}

// console.log(checkIfAllEven([1, 2, 3]));
// console.log(checkIfAllEven([4, 2, 8]));
// console.log(checkIfAllEven([4, 2, 3]));

//some

function checkIfOnlyEvenV3(number) {
  if (!Array.isArray(number)) return false;

  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) return true;
  }

  return false;
}

// console.log(checkIfOnlyEven([1, 2, 4]));
// console.log(checkIfOnlyEven("2", "3"));
// console.log(checkIfOnlyEven([1, 3, 5]));
// console.log(checkIfOnlyEven([1, 3, 6]));

//indexOf

function searchTextV4(text) {
  if (!Array.isArray(text)) return false;

  for (let i = 0; i < text.length; i++) {
    if (text[i].indexOf("ea") >= 0) return true;
  }
  return false;
}

// console.log(searchText(["qwrwer", "acvasd"]));
// console.log(searchText(["erias", "rea"]));
// console.log(searchText(["eris", "re"]));
// console.log(searchText(["ervbvis", "re"]));

//v 2

function searchTextV5(text) {
  if (!Array.isArray(text)) return -1;

  for (let i = 0; i < text.length; i++) {
    if (text[i].indexOf("a") >= 0) return `${text[i].indexOf("a")}`;
  }
  return -1;
}

// console.log(searchText(["qwrwer", "qacvasd"]));
// console.log(searchText(["erias", "rea"]));
// console.log(searchText(["eris", "re"]));
// console.log(searchText(["ervbvis", "re"]));

//lastIndexOf
function searchTextV6(text) {
  if (!Array.isArray(text)) return -1;
  let isValue = -1;
  for (let i = 0; i < text.length; i++) {
    if (text[i].lastIndexOf("a") >= 0) isValue = `${text[i].lastIndexOf("a")}`;
  }
  return isValue;
}

// console.log(searchText(["qwrwer", "qacvasd"]));
// console.log(searchText(["erias", "rea"]));
// console.log(searchText(["eris", "re"]));
// console.log(searchText(["ervbvis", "rea"]));

//includes
function searchTextv7(text) {
  if (!Array.isArray(text)) return false;
  let isValid = false;
  for (let i = 0; i < text.length; i++) {
    if (text[i].includes("ia")) isValid = true;
    break;
  }

  return isValid;
}

// console.log(searchText(["qwrwer", "acvasd"]));
// console.log(searchText(["erias", "rea"]));
// console.log(searchText(["eris", "re"]));
// console.log(searchText(["ervbvis", "re"]));
