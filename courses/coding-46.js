function binarySearch(studentList, searchName) {
  // your code here

  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    searchName === undefined ||
    studentList === undefined
  )
    return -1;

  let left = 0;
  let right = studentList.length - 1;

  while (left < right) {
    const mid = left + Math.trunc((right - left) / 2);

    if (
      studentList[mid].name.trim().toLowerCase() ===
      searchName.trim().toLowerCase()
    )
      return mid;

    if (studentList[mid].name < searchName) {
      left = mid;
    }

    if (studentList[mid].name > searchName) {
      right = mid;
    }
  }

  return -1;
}

console.log(
  binarySearch(
    [
      { id: 0, name: " ac   e  " },
      { id: 1, name: "Blice" },
      { id: 2, name: "CobTan" },
      { id: 3, name: "John " },
    ],
    " ac   e  "
  )
);
