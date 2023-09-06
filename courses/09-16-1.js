function findMaxI(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }

  return max;
}

console.log(findMaxI([1, 2, 3, 6]));

//forEach

function findMaxEach(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  let max = arr[0];
  arr.forEach((number) => {
    if (number > max) {
      max = number;
    }
  });
  return max;
}

console.log(findMaxEach([1, 2, 4, 6, 8]));
console.log(findMaxEach([1, 22, 4, 6, 8]));

//reduce

function findMaxReduce(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  // return arr.reduce((max, number) => {
  //   if (max < number) return number;

  //   return max;
  // })

  return arr.reduce((max, number) => {
    return max < number ? number : max;
  });
}

console.log(findMaxReduce([1, 2, 4, 7]));
