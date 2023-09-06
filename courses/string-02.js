export function statisticsWords(str) {
  if (typeof str !== "string" || str.length === 0) return {};

  const statistics = {};

  const newArray = str.split(" ").filter((x) => x !== "");

  for (let i = 0; i < newArray.length; i++) {
    const word = newArray[i];
    if (statistics[word]) {
      statistics[word] += 1;
    } else {
      statistics[word] = 1;
    }
  }

  return statistics;
}
