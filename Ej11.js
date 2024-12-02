const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  // insert code

  let sumNum = 0;

  for (const x of param) {
    if(typeof x == "number"){
        sumNum += x;
    } else if (typeof x == "string"){
        sumNum += x.length;
    }
  }

  return sumNum / param.length;
}

console.log(averageWord(mixedElements));
