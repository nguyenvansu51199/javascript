function countStudents(studentList) {
  // your code here
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;
  let count = 0;
  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];
    if (student.gender === "male") count += 1;
  }

  return count;
}
