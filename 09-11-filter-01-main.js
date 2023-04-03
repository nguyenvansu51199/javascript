function filter(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== "function") return undefined;

  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callbackFn(element, i)) {
      newArray.push(element);
    }
  }

  return newArray;
}

function greaterThanThree(element) {
  return element > 3;
}

console.log(filter([1, 2, 3, 4, 5], (x) => x > 2));
console.log(filter([1, 2, 3, 4, 5], greaterThanThree));

//vvvv

function filter(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== "function") return undefined;

  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    callbackFn(element, i);
    if (callbackFn(element, i)) {
      newArray.push(element);
    }
  }

  return newArray;
}

console.log(filter([1, 2, 3, 4, 5], (x) => x > 2));
