function getUniqueWords(sentence) {
  // your code here ...

  if (sentence.length === 0) return [];

  const stringArray = sentence.split(" ");

  const unitWordSet = new Set(stringArray);
  // return [...unitWordSet];
  return Array.from(unitWordSet);
}

console.log(getUniqueWords("frontend is easy but easy to die"));
