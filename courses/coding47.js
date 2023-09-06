function bubbleSort(numberList) {
  // your code here

  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  return numberList.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    if ((a = b)) return 0;
  });
}

console.log(bubbleSort([1, 2, 4, 6, 3, 4]));
