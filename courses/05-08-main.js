// v1
export function isEvenPositiveNumberV1(n) {
  let isValid; // undefined

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

// console.log(isEvenPositiveNumber(2));

// v2
export function isEvenPositiveNumberV2(n) {
  let isValid = false;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}

// console.log(isEvenPositiveNumber(4));

// v3
export function isEvenPositiveNumberV3(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }

  return false;
}

// v4
export function isEvenPositiveNumberV4(n) {
  return n > 0 && n % 2 === 0;
}

// console.log(isEvenPositiveNumber(3));
