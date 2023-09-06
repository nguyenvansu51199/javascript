// 1. Get the ones of a number having 3 digits
export function extractTheOnes(n) {
  if (n.toString().length !== 3) return -1;

  return n % 10;
}

// console.log(extractTheOnes(113));
// console.log(extractTheOnes(244));
// console.log(extractTheOnes(51));

// 2. Get the tens of a number having 3 digits
export function extranctTheTens(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc((n % 100) / 10);
}

// console.log(extranctTheTens(113));
// console.log(extranctTheTens(244));
// console.log(extranctTheTens(51));

// 3. Get the hundreds of a number having 3 digits

export function extranctTheHundreds(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc(n / 100);
}

// console.log(extranctTheHundreds(113));
// console.log(extranctTheHundreds(244));
// console.log(extranctTheHundreds(944));
// console.log(extranctTheHundreds(51));
