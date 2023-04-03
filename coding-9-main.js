function formatTime(seconds) {
  // your code here
  if (seconds < 0 || seconds > 86400) return -1;
  let formatHour;
  let formatMinute;
  let formatSecond;
  const SECONDS_PER_HOUR = 3600;
  const SECONDS_PER_MIN = 60;

  //Seconds
  formatSecond = `${seconds % 60}`;
  if (formatSecond.length === 1) formatSecond = formatSecond.padStart(2, "0");

  // Minutes
  if (Math.trunc(seconds / SECONDS_PER_MIN) < 59) {
    formatMinute = `${Math.trunc(seconds / 60)}`;
  } else formatMinute = `${Math.trunc(seconds / 60) - 60}`;
  if (formatMinute.length === 1) formatMinute = formatMinute.padStart(2, "0");

  // Hours
  formatHour = `${Math.trunc(seconds / SECONDS_PER_HOUR)}`;
  if (formatHour.length === 1) formatHour = formatHour.padStart(2, "0");

  return `${formatHour}:${formatMinute}:${formatSecond}`;
}

console.log(formatTime("0"));
console.log(formatTime("9"));
console.log(formatTime("30"));
console.log(formatTime("1234"));
console.log(formatTime("3700"));
