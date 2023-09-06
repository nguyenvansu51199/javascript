//v
function getDivisorListV1(n) {
  // your code here
  if(n < 1 || n > 1000) return undefined;
  let newArray = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      newArray.push(i);
    }
  }
  return newArray;
}

console.log(getDivisorListV1(1));
console.log(getDivisorListV1(10));
console.log(getDivisorListV1(12));

//v2

function getDivisorListV2(n) {
  // your code here
  if(n < 1 || n > 1000) return undefined;
  const createArray = Array.from({ length: n + 1 }, (v, i) => i);
  return createArray.filter(x => n % x === 0);

}

console.log(getDivisorListV2(10));
console.log(getDivisorListV2(12));

///v3

function getDivisorList3(n) {
  // your code here
  let newArray = [];
  if(n < 1 || n > 1000) return undefined;
  const createArray = Array.from({ length: n + 1 }, (v, i) => i);
  createArray.forEach((x) => {
    if (n % x === 0) newArray.push(x)
  });
  // newArray.push(findElement);
  return newArray;
  
}

console.log(getDivisorList3(10));
console.log(getDivisorList3(12));