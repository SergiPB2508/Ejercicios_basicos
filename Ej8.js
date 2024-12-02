const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code

  let longestWord = "";

  for (const str of param) {
    if(str.length > longestWord.length){
        longestWord = str;
    }
  }

  return longestWord;

}

console.log(findLongestWord(avengers));

