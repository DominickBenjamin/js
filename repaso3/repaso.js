const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((acc, currentValue) => {
    return acc+currentValue;
  }, 0);
  console.log(total);
  