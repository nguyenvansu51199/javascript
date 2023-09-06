function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] > numberList[j + 1]) {
        // const temp = numberList[j];
        // numberList[j] = numberList[j + 1];
        // numberList[j + 1] = temp;

        // v2
        // [x, y] = [y , x]
        [numberList[j + 1], numberList[j]] = [numberList[j], numberList[j + 1]];
      }
    }
  }
  return numberList;
}

console.log(bubbleSort([2, 3, 4, 1]));
console.log(bubbleSort([2, 3, 4, 1, 9, 0, 11]));
