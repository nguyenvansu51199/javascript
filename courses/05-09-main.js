//v1
export function classifyStudentV1(mark) {
  if (mark < 0 || mark > 10) return "Invalid";

  let result;
  if (mark > 8) result = "Excellence";
  else if (mark >= 7) result = "Good";
  else if (mark >= 4) result = "Not Good";
  else result = "Bad";

  return result;
}

// console.log(classifyStudent(11));
// console.log(classifyStudent(12));
// console.log(classifyStudent(6));
// console.log(classifyStudent(2));
// console.log(classifyStudent(10));

//v2
export function classifyStudentV2(mark) {
  if (mark < 0 || mark > 10) return "Invalid";
  let result = "Bad";

  if (mark > 8) result = "Excellence";
  else if (mark >= 7) result = "Good";
  else if (mark >= 4) result = "Not Good";

  return result;
}

// console.log(classifyStudent(11));
// console.log(classifyStudent(12));
// console.log(classifyStudent(6));
// console.log(classifyStudent(2));
// console.log(classifyStudent(10));

//v3

export function classifyStudentV3(mark) {
  if (mark < 0 || mark > 10) return "Invalid";
  if (mark > 8) return "Excellence";
  else if (mark >= 7) return "Good";
  else if (mark >= 4) return "Not Good";
  else return "Bad";
}

// console.log(classifyStudent(11));
// console.log(classifyStudent(12));
// console.log(classifyStudent(6));
// console.log(classifyStudent(2));
// console.log(classifyStudent(10));

//v

export function classifyStudentV4(n) {
  if (n < 0 || n > 10) return "Invalid";

  if (n > 8) return "Excellence";
  else if (n >= 7) return "Good";
  else if (n >= 4) return "Not Good";
  else return "Bad";
}

// console.log(classifyStudent(11));
// console.log(classifyStudent(12));
// console.log(classifyStudent(6));
// console.log(classifyStudent(2));
// console.log(classifyStudent(10));
// console.log(classifyStudent(-10));
