function findLongestWordI(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];
  for (let i = 0; i < wordList.length; i++) {
    const currentWord = wordList[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;
}

console.log(findLongestWordI(["easy", "fontend"]));

//

function findLongestWordEach(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];
  wordList.forEach((currentWord) => {
    if (currentWord.length > longestWord.length) longestWord = currentWord;
  });
  return longestWord;
}

console.log(findLongestWordEach(["easy", "fontend"]));

//
function findLongestWordReduce(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  return wordList.reduce((longestWord, currentWord) => {
    if (longestWord.length < currentWord.length) return currentWord;
    return longestWord;
  });
}

console.log(findLongestWordReduce(["easy", "fontend"]));
console.log(findLongestWordReduce(["eas2313y", "fontend"]));

//
function findLongestWordReduce(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  return wordList.reduce((longestWord, currentWord) => {
    return longestWord.length < currentWord.length ? currentWord : longestWord;
  });
}

console.log(findLongestWordReduce(["easy", "fontend"]));
console.log(findLongestWordReduce(["eas2313y", "fontend"]));

//
function findLongestWordReduce(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  return wordList.reduce((longestWord, currentWord) =>
    longestWord.length < currentWord.length ? currentWord : longestWord
  );
}

console.log(findLongestWordReduce(["easy", "fontend"]));
console.log(findLongestWordReduce(["eas2313y", "fontend"]));
