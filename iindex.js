// Nếu là số dương thì ...
function checkNumber(n) {
  if (n > 0) {
  }
}

// Nếu là số dương chẳn thì ...
function checkNumber2(n) {
  if (n > 0 && n % 2 === 0) {
  }
}

// Nếu là số dương chẵn và lớn hơn 10 thì ...
function checkNumber3(n) {
  if (n > 0 && n % 2 === 0 && n > 10) {
  }
}

// Nếu là số dương chẵn chia hết cho 5 và lớn hơn 10 thì ...
function checkNumber4(n) {
  if (n > 0 && n % 2 === 0 && n % 5 === 0 && n > 10) {
  }
}

// Nếu là số dương chẳn hoặc số âm lẻ thì ...
function checkNumber5(n) {
  const isEvenPositive = n > 0 && n % 2 === 0;
  const isOddNegative = n < 0 && n % 2 !== 0;
  if (isEvenPositive || isOddNegative) {
  }
}


function findSecret(code) {
  const score = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const divide = score.split('');
  const mang = code.replaceAll(divide, '');
  return  mang.join();
}

console.log(findSecret('ABVDqqwerr'));
console.log(findSecret('ABVDsdqqwerr'));
console.log(findSecret('ABVDqqwerr'));



function formatSecondsV2(seconds) {
  // your code here
  if (seconds < 0 || seconds >= 60) return -1;
  let result = `${0}${seconds}`;
  return `${result.slice(-2)}`;

}


console.log(formatSecondsV2('12'));
console.log(formatSecondsV2('2'));
console.log(formatSecondsV2('60'));
console.log(formatSecondsV2('67'));
