const student = {
  name: "Easy Frontend",
  age: 18,
};
const moreProps = {
  isHero: true,
  gender: "male",
};
// v1: using Object.assign()
const clonedStudent = Object.assign({}, student, moreProps);
