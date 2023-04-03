function hasEmail(str) {
  return str.includes("@gmail.com");
}

console.log(hasEmail("qewroiạ@gmail.com"));
console.log(hasEmail("qewroiạ@gmail.com123"));
console.log(hasEmail("qewroiạ@gmail.cdfs"));

//v 2

function hasEmail(str) {
  return str.indexOf("@gmail.com") >= 0;
}

console.log(hasEmail("qeweroiạ@gmail.com"));
console.log(hasEmail("qewroiạ@gmail.com123"));
console.log(hasEmail("qewroiạ@gmail.cdfs"));

//v 3

function hasEmail(str) {
  return str.lastIndexOf("@gmail.com") >= 0;
}

console.log(hasEmail("qeweroiạ@gmail.com"));
console.log(hasEmail("qewroiạ@gmail.com123"));
console.log(hasEmail("qewroiạ@gmail.cdfs"));
