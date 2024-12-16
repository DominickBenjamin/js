const procesarArray = (arr) => {
  arr.sort((a, b) => a - b);
  return [...new Set(arr)];
};

let numeros1 = [5, 3, 8, -1, -1, 3, 2, 5, 0, -5, 8];
let numeros2 = [10, 20, 10, 0, -10, 20, 5, -5];

console.log(procesarArray(numeros1)); // [-5, -1, 0, 2, 3, 5, 8]
console.log(procesarArray(numeros2)); // [-10, -5, 0, 5, 10, 20]

///// la mejor solucion
function prepareGifts(gifts) {
  return [...new Set(gifts)].sort((a, b) => a - b)
}


const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]





















//const gifts1 = [3, 1, 2, 3, 4, 2, 5]
//const preparedGifts1 = prepareGifts(gifts1)
//console.log(preparedGifts1) // [1, 2, 3, 4, 5]