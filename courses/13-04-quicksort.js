function partition(numberList, left, right) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let i = left;
  let j = right;

  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];

  while (i <= j) {
    while (numberList[i] < pivot) i++;

    while (numberList[j] > pivot) j--;

    if (i < j) {
      const temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }

    if (i <= j) {
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(numberList, left, right) {
  // your code here

  if (left >= right) return numberList;
  const pivotPosition = partition(numberList, left, right);

  quickSort(numberList, left, pivotPosition - 1);
  quickSort(numberList, pivotPosition, right);

  return numberList;
}

console.log(quickSort([2, 3, 1], 0, 2));
