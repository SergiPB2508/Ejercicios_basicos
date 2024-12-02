const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code

  let sumNum = 0;

  for (const num of param) {
    sumNum += num;
  }

  return sumNum / param.length;

}

console.log(average(numbers));
