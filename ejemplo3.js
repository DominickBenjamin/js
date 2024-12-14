const procesarArray = function(arr) {
  
  arr.sort(function(a, b) { return a - b; });

 
  const soloPositivos = arr.filter(function(numero) { return numero >= 0; });

 
  return soloPositivos;
};


let numeros = [3, -1, 8, -5, 2, -9, 4];


console.log(procesarArray(numeros)); // [2, 3, 4, 8]
