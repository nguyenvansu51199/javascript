function formatSecondsV1(seconds) {
  // your code here
  if (seconds < 0 || seconds >= 60) return "";

  if (seconds.length === 2) return seconds;
  else return seconds.padStart(2, "0");
}

console.log(formatSecondsV1("12"));
console.log(formatSecondsV1("45"));
console.log(formatSecondsV1("42"));
console.log(formatSecondsV1("61"));
console.log(formatSecondsV1("3"));
console.log(formatSecondsV1("90"));

// using slice()
function formatSecondsV2(seconds) {
  // your code here
  if (seconds < 0 || seconds >= 60) return -1;
  let result = `${0}${seconds}`;
  return result.slice(-2);
}

console.log(formatSecondsV2("12"));
console.log(formatSecondsV2("2"));
console.log(formatSecondsV2("60"));
console.log(formatSecondsV2("67"));
