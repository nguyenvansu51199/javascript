// v1
function isEvenPositiveNumber(n) {
  let isValid; // undefined

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

console.log(isEvenPositiveNumber(2));

// v2
function isEvenPositiveNumber(n) {
  let isValid = false;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}

console.log(isEvenPositiveNumber(4));

// v3
function isEvenPositiveNumber(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }

  return false;
}

// v4
function isEvenPositiveNumber(n) {
  return n > 0 && n % 2 === 0;
}

console.log(isEvenPositiveNumber(3));
