export function capitalsize(str) {
  if (str === "") return "";

  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}

console.log(capitalsize(""));
console.log(capitalsize("ABc"));
console.log(capitalsize("siòađFJ"));
