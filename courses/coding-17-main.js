//v1
// kiểm tra số nguyên tố bằng cách lấy số đó(n) chia lấy dư dãy số chạy từ 2 đến n-1.
// Nếu có dư thì số đó là số nguyên tố

function isPrimeV1(n) {
  // your code here
  if (n < 2 || n >= 1000) return false;

  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrimeV1(4));
console.log(isPrimeV1(13));
console.log(isPrimeV1(97));
console.log(isPrimeV1(53));
console.log(isPrimeV1(8));
console.log(isPrimeV1(7));
console.log(isPrimeV1(6));

///
// lấy số đó(n) chia lấy dư dãy số chạy từ i đến căn bậc 2 của n
//nếu không dư thì false; dư thì true

function isPrimeV2(n) {
  // your code here

  if (n < 2 || n >= 1000) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrimeV2(4));
console.log(isPrimeV2(2));
console.log(isPrimeV2(3));
console.log(isPrimeV2(5));
console.log(isPrimeV2(7));
console.log(isPrimeV2(9));
console.log(isPrimeV2(16));
console.log(isPrimeV2(21));
