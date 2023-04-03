// using split
function extractDomainV1(email) {
  // your code here
  if (email === "") return "";

  const divideDomain = email.split("@");
  return divideDomain[1];
}

console.log(extractDomainV1("sudf@gmail.com"));
console.log(extractDomainV1("sudf@assdl.com"));

// using indexOf() and slice()
function extractDomainV2(email) {
  // your code here
  if (email === "") return "";

  const mail = email.indexOf("@");
  return `${email.slice(mail + 1)}`;
}

console.log(extractDomainV2("sudf@gmail.com"));
console.log(extractDomainV2("sudf@abc.com"));
