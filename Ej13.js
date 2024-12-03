const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(array, name) {
    // insert code
    let finde = array.indexOf(name);

    if(finde >= 0){
        return true + " " +finde;
    } else {
        return false
    }
    
  }

  console.log(finderName(nameFinder, "Logan"));
  