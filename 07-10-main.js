function truncate(text, maxlength) {
  if (text.length <= maxlength) return text;
  const shortStr = text.slice(0, maxlength - 1);
  return `${shortStr}\u2026`;
}

console.log(truncate("transs", 4));
console.log(truncate("transs", 8));
console.log(truncate("transđs", 4));
