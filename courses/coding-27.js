function uniqueLetters(str) {
  // your code here
  if (typeof str !== "string" || str.length === 0) return "";

  let newString = str;
  let result = str;
  for (let i = 0; i < newString.length; i++) {
    const word = newString[i];
    for (let y = i + 1; y < newString.length; y++) {
      if (word === newString[y]) {
        result = result.replaceAll(word, "");
      }
      newString = result;
    }
  }

  return newString;
}

console.log(uniqueLetters(""));
console.log(uniqueLetters("aabccddeeff"));
console.log(uniqueLetters("abc"));
console.log(uniqueLetters("easy frontend"));
