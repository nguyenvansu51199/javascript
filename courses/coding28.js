function countWords(str) {
  // your code here
  if (typeof str !== "string") return "Invalid";

  const stringNotSpace = str.trim();
  let newString = stringNotSpace;
  let result = stringNotSpace;
  // let newString1 = stringNotSpace;

  // for (let i = 1; i < newString.length; i++) {
  //   newString = newString.replaceAll("  ", "");
  // }

  while (newString.length) {
    newString = newString.replaceAll("  ", " ");
    result = newString.replaceAll("  ", " ");
  }
  return result;
}

console.log(countWords("   abv   cc   "));
console.log(countWords("   abv  cc   "));
console.log(countWords("   abv   "));
