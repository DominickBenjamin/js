const procesarArray = (arr) => {
    
    arr.sort((a, b) => a - b);
  
    
    return arr.filter(numero => numero >= 0 );
    
  };
  
  // Ahora puedes usarlo con diferentes arrays
  let numeros1 = [3, -1, 8, -5, 2, -9, 4];
  let numeros2 = [-10, 15, -3, 0, 7, -20, 30];
  
console.log(procesarArray(numeros1)); // [2, 3, 4, 8]
console.log(procesarArray(numeros2)); // [0, 7, 15, 30]
  






















//const gifts1 = [3, 1, 2, 3, 4, 2, 5]
//const preparedGifts1 = prepareGifts(gifts1)
//console.log(preparedGifts1) // [1, 2, 3, 4, 5]