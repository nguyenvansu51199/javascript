export function classifyNumberV1(mark) {
  let result;

  switch (mark) {
    case 1:
    case 2:
    case 3: {
      result = "Bad";
      break;
    }

    case 4:
    case 5:
    case 6: {
      result = "Not Good";
      break;
    }

    case 7:
    case 8: {
      result = "Good";
      break;
    }

    case 9:
    case 10: {
      result = "Excellence";
      break;
    }

    default: {
      return "Invalid Number";
    }
  }

  return result;
}

// console.log(classifyNumber(7));
// console.log(classifyNumber(12));
// console.log(classifyNumber(5));
// console.log(classifyNumber(2));

export function classifyNumberV2(n) {
  let result;

  switch (n) {
    case 1:
    case 2: {
      result = "123";
      break;
    }
    case 3:
    case 4: {
      result = "456";
      break;
    }

    default:
      result = "789";
  }

  return result;
}

// console.log(classifyNumber(3));
// console.log(classifyNumber(1));

//v

export function classifyNumberV3(n) {
  let result;

  switch (n) {
    case 1:
    case 2:
    case 3: {
      result = "Bad";
      break;
    }

    case 4:
    case 5:
    case 6: {
      result = "Not Good";
      break;
    }

    case 7:
    case 8: {
      result = "Good";
      break;
    }

    case 9:
    case 10: {
      result = "Excellence";
      break;
    }

    default: {
      result = "Invalid";
    }
  }

  return result;
}

// console.log(classifyNumber(-3));
// console.log(classifyNumber(5));
// console.log(classifyNumber(9));
// console.log(classifyNumber(2));
