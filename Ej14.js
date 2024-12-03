
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function repeatCounter(param) {
    // insert code
    for (let i = 0;i < param.length;i++) {
        if (param.indexOf(param[i]) === i) {
            let array = param.filter((y) => y === param[i]);
            console.log(param[i] + ": " + array.length);
        }
    }
  }

  repeatCounter(counterWords);