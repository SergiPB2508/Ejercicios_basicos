const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(param) {
    // insert code

    return param.filter((item, index) => param.indexOf(item) === index);

  }

  console.log(removeDuplicates(duplicates));
  