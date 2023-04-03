// using indexOf()
function isSecureUrlV1(url) {
  // your code here
  return url.indexOf("https") >= 0 || url.indexOf("wss") >= 0;
}

// using startsWith()
function isSecureUrlV2(url) {
  // your code here

  return url.startsWith("https") || url.startsWith("wss");
}
