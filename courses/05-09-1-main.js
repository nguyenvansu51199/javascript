function classifyNumber(mark) {
  let result = "Bad";
  if (mark < 0 || mark > 10) result = "Invalid";
  if (mark > 8) result = "Excellence";
  else if (mark >= 6) return 12314;
  else if (mark >= 4) result = "Not Good";

  return result;
}

console.log(classifyNumber(7));
console.log(classifyNumber(12));
console.log(classifyNumber(5));
console.log(classifyNumber(2));
