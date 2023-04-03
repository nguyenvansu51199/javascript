// v1
function getErrorMessage(errorCode) {
  let message = "";

  switch (errorCode) {
    case "E01": {
      message = "Invalid usrname or password";
      break;
    }
    case "E02": {
      message = "Too many attempts";
      break;
    }
    case "E03": {
      message = "Messing data";
      break;
    }

    default: {
      message = "Somgthing went wrong";
    }
  }

  return message;
}

console.log(getErrorMessage("E01"));
console.log(getErrorMessage("E02"));
console.log(getErrorMessage("E03"));
console.log(getErrorMessage("E04"));

//v2

function getErrorMessage(errorCode) {
  const errorMap = {
    E01: "Invalid usrname or password",
    E02: "Too many attempts",
    E03: "Messing data",
  };

  return errorMap(errorCode) || "Somgthing went wrong";
}

console.log(getErrorMessage("E01"));
console.log(getErrorMessage("E02"));
console.log(getErrorMessage("E03"));
console.log(getErrorMessage("E04"));

function getTicketPrice(age) {
  // your code here
  if (age < 0 || age > 125) return -1;

  let price;
  if (age > 70) return 0;
  if (age < 6) return 0;
  else if (age <= 12) price = "20000 VND";
  else price = "50000 VND";

  return price;
}

console.log(getTicketPrice(3));
console.log(getTicketPrice(14));
console.log(getTicketPrice(11));
console.log(getTicketPrice(91));
