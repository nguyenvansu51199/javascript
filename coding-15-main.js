function isEqual(obj1, obj2) {
  let isResult = false;
  if (Object.keys(obj1).length === Object.keys(obj2).length) isResult = true;

  return isResult;
}

console.log(isEqual({}, {}));
console.log(isEqual({ name: "A" }, { name: "A" }));
console.log(isEqual({ age: "18" }, { name: "A", age: "12" }));
