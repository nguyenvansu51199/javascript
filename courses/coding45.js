const PIN_LENGTH = 6;
function isValidPIN(pin) {
  // your code here ...
  let condition1 = false;
  let condition2 = false;

  if (pin.length !== PIN_LENGTH) return false;

  for (let i = 0; i < pin.length; i++) {
    if (pin.charCodeAt(i) < 48 || pin.charCodeAt(i) > 57) return false;
  }

  for (let y = 1; y < pin.length; y++) {
    const element = Number(pin[y]);

    if (element - Number(pin[y - 1]) !== 1) {
      condition1 = true;
      break;
    }
  }

  for (let p = 1; p < pin.length; p++) {
    if (Number(pin[p - 1]) - Number(pin[p]) !== 1) {
      condition2 = true;
      break;
    }
  }

  for (let z = 0; z < pin.length; z++) {
    let count = 1;
    for (let a = z + 1; a < pin.length; a++) {
      if (pin[z] === pin[a]) {
        count++;
      }
    }
    if (count > 2) return false;
    count = 1;
  }

  return condition1 && condition2;
}

console.log(isValidPIN("123443"));
console.log(isValidPIN("12345"));
console.log(isValidPIN("454545"));
console.log(isValidPIN("111234"));
console.log(isValidPIN("123233"));
