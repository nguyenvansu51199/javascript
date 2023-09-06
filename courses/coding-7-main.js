function removeVowel(str) {
  // your code here
  if (str === "") return "";

  const removeU = str.replace("u", "");
  const removeE = removeU.replace("e", "");
  const removeO = removeE.replace("o", "");
  const removeA = removeO.replace("a", "");
  const removeI = removeA.replace("i", "");

  const removeAll = removeI.trim();

  return removeAll;
}

console.log(removeVowel("sayhello"));

function formatSecondsV1(seconds) {
  // your code here
  if (seconds < 0 || seconds >= 60) return "";

  if (seconds.length === 2) return seconds;
  else return seconds.padStart(2, "0");
}

console.log(formatSecondsV1("12"));
console.log(formatSecondsV1("1"));
console.log(formatSecondsV1("90"));
