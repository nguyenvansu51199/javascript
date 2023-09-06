this.name = "Easy Frontend";
console.log(global.name);

function abc(a = 10, b = 20) {
  function def() {
    return 1 + 1;
  }

  function rty() {
    return 2 + 4;
  }

  return {
    def: def,
  };
}

const qq = abc();
console.log(qq.def()); // abc().rty();
// qq (abc());

///////////////////////

const abc = function (a, b) {
  console.log(a + b);
};

abc(1, 2);
/////////////////////////////
const def = (a, b) => console.log(a + b);
def(
  1,
  4
)(
  //////////////////

  function () {
    console.log("Easy Frontend");
  }
)();
