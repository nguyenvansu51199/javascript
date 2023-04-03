function parameterize(str) {
  // return str.toLowerCase().replaceAll(' ', '-');

  return str.toLowerCase().split(" ").join("-");
}

console.log(parameterize("adf 2dfSDÓDS acVV"));
