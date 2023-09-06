function mergeArray(a, b) {
  // your code here
  if (!Array.isArray(a) || !Array.isArray(b)) return [];
  let concatArray = [];
  let filterArray = b;
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if (element < 1) return false;
    filterArray = filterArray.filter((number) => number !== element);
  }
  concatArray = a.concat(filterArray);

  return concatArray;
}

console.log(mergeArray([1, 2, 3], [2, 3, 4]));
