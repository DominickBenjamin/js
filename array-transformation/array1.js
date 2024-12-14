/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const arreglosuma = function(arr, fn) {
    const result = []; // Crear un nuevo arreglo vacío
    for (let i = 0; i < arr.length; i++) { // Iterar sobre el arreglo
        result.push(fn(arr[i], i)); // Aplicar la función y agregar el resultado al nuevo arreglo
    }
    return result; // Devolver el arreglo transformado
};

// Ejemplo 1
const arr = [1, 2, 3];

const plusone = function(n) { 
    return n + 1; 
};

console.log(arreglosuma(arr, plusone)); // [2, 3, 4]
