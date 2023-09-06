((a, b) => {
  console.log(a + b);
})(5, 19);

(function (a, b) {
  console.log(a + b);
})(5, 10);

(function () {
  let a = 10;
  let b = 20;
  console.log(a + b);
})();
