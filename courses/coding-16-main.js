// using for...i
function createArrayInRangeV1(a, b) {
  // your code here
  let newArray = [];

  for (let i = a; i <= b; i++) {
    const element = i;
    newArray.push(element);
  }

  return newArray;
}

console.log(createArrayInRangeV1(1, 5));
console.log(createArrayInRangeV1(1, 105));
console.log(createArrayInRangeV1(-1, 5));

function createArrayInRangeV2(a, b) {
  // your code here
  Array.from({ length: b - a + 1 }, (a) => (a += 1));
}

console.log(createArrayInRangeV2(1, 5));

function range(end) {
  return Array.from({ length: end }, (_, index) => index);
}

console.log(range(3));
