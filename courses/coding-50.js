
function createRandomColorFn(colorList) {
  // your code here

  if (!Array.isArray(colorList)) throw new Error('colorList should be an array');
  if (colorList.length === 0) throw new Error('colorList should not be empty');
  if (colorList.length === 1) throw new Error('colorList should have more than one item');
  let temp;

  return function () {
    let random = Math.random() * (colorList.length);
    let result = colorList[Math.floor(random)];

    while (temp === result) {
      random = Math.random() * (colorList.length);
      result = colorList[Math.floor(random)];
    }
    temp = result;
    console.log(result);
    // return result;
  }
}

const randomColor = createRandomColorFn(['q', 'w', 'E', 'R', 'T', 'U', 1, 5]);
const currentColor = randomColor();
const nextColor = randomColor();
const nextColorV2 = randomColor();
const nextColorV3 = randomColor();
const nextColorV4 = randomColor();
const nextColorV5 = randomColor();
const nextColorV6 = randomColor();   