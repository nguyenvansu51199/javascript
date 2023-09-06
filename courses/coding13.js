function getFullName(firstName, lastName) {
  // your code here
  let capitalOfFirstName = "";
  let restOfFirstName = "";
  let capitalOfLastName = "";
  let restOfLastName = "";
  let fullFirstName = "";
  let fullLastName = "";

  if (firstName.length !== 0) {
    capitalOfFirstName = firstName[0].toUpperCase();
    restOfFirstName = firstName.slice(1).toLowerCase();
  }

  fullFirstName = `${capitalOfFirstName}${restOfFirstName}`;

  if (lastName.length !== 0) {
    capitalOfLastName = lastName[0].toUpperCase();
    restOfLastName = lastName.slice(1).toLowerCase();
  }

  fullLastName = `${capitalOfLastName}${restOfLastName}`;

  const result = `${fullFirstName} ${fullLastName}`;
  return result.trim();
}

console.log(getFullName("aFD", "binh"));
console.log(getFullName("john", "pHAm"));
console.log(getFullName("Bob", "Tran"));
console.log(getFullName("Alice", ""));
console.log(getFullName("", "Nguyen"));
console.log(getFullName("Alice"));
