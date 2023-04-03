// - Nếu là số dương thì ...
function checkNumber(n) {
  if (n > 0) {
  }
}

// - Nếu là số dương chẳn thì ...
function checkNumber2(n) {
  if (n > 0 && n % 2 === 0) {
  }
}

// - Nếu là số dương chẵn và lớn hơn 10 thì ...
function checkNumber3(n) {
  if (n > 0 && n % 2 === 0 && n > 10) {
  }
}

// - Nếu là số dương chẵn chia hết cho 5 và lớn hơn 10 thì ...
function checkNumber4(n) {
  if (n > 0 && n % 2 === 0 && n % 5 === 0 && n > 10) {
  }
}

// - Nếu là số dương chẳn hoặc số âm lẻ thì ...
function checkNumber5(n) {
  const isEvenPositive = n > 0 && n % 2 === 0;
  const isOddNegative = n < 0 && n / 2 !== 0;
  if (isEvenPositive || isOddNegative) {
  }
}

function getTaxiCount(passengersCount) {
  // your code here
  if (passengersCount % 7 === 0) {
    return passengersCount / 7;
  }

  if (passengersCount % 7 !== 0) {
    passengersCount % 7;
  }
}

console.log(getTaxiCount(21));

function getMaxDigit(n) {
  // your code here
  if (n < 0 || n >= 1000) return -1;

  let max = 0;
  let ones = n % 10;
  let tens = Math.trunc((n % 100) / 10);
  let hundereds = Math.trunc(n / 100);

  if (ones > max) max = ones;
  if (tens > max) max = tens;
  if (hundereds > max) max = hundereds;

  return max;
}

console.log(getMaxDigit(123));
console.log(getMaxDigit(423));
console.log(getMaxDigit(193));

//vv
function isSymmetricNumber(n) {
  // your code here
  if (n < 0 || n > 999) return false;

  let showNumber = false;
  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundereds = Math.trunc(n / 100);

  if (ones === tens) showNumber = true;
  if (ones === hundereds) showNumber = true;
  if (tens === hundereds) showNumber = true;

  return showNumber;
}

console.log(isSymmetricNumber(123));
console.log(isSymmetricNumber(33));
console.log(isSymmetricNumber(303));
console.log(isSymmetricNumber(1));
