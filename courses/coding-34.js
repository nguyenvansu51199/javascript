function chunkArray(array, size) {
  // your code here ...
  if (!Array.isArray(array) || size <= 0) return [];
  const resultArray = [];
  let sizeArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sizeArray.push(element);

    if (sizeArray.length === size || i === array.length - 1) {
      resultArray.push(sizeArray);
      sizeArray = [];
    }
    if (resultArray.length > 20) {
      throw new Error("Too many chunks");
    }
  }

  return resultArray;
}

console.log(chunkArray([1, 2, 3], 2));
console.log(chunkArray([1, 2, 3], 3));
console.log(
  chunkArray(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    1
  )
);
