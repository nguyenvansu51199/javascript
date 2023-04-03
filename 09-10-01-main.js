function map(arr, mappingFn) {
  if (!Array.isArray(arr) || typeof mappingFn !== "function") return undefined;

  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = mappingFn(element, i);
    newArray.push(newElement);
  }

  return newArray;
}

console.log(map([1, 2, 3], (x) => x * 2));
console.log(map([1, 2, 3], (x) => x * 2));

//v

function map(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== "function") return undefined;

  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = callbackFn(element, i);
    newArray.push(newElement);
  }

  return newArray;
}

console.log(map([1, 2, 3], (x) => x * 2));
console.log(map([1, 2, 3], (x) => x * 2));

function map(arr, mappingFn) {
  if (!Array.isArray(arr) || typeof mappingFn !== "function") return undefined;

  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    mappingFn(element, i);
    newArray.push(mappingFn(element));
  }

  return newArray;
}

console.log(map([1, 2, 3], (x) => x * 2));
console.log(map([1, 2, 3], (x) => x * 2));
console.log(
  map([1, 2, 3], function (abc) {
    return abc * 2;
  })
);
