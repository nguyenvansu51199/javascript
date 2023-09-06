// function coutnDown(seconds) {
//   let countDownSencond = seconds;

//   const interverId = setInterval(() => {
//     console.log(countDownSencond);
//     if (countDownSencond <= 0) {
//       clearInterval(interverId);
//     }
//     countDownSencond -= 1;
//   }, 1000);
// }

// coutnDown(4);

function coutnDown(seconds) {
  let countDownSencond = seconds;

  const interverId = setInterval(() => {
    console.log(countDownSencond);
    if (countDownSencond <= 0) {
      clearInterval(interverId);
    }
    countDownSencond -= 1;
  }, 1000);
}

coutnDown(4);
