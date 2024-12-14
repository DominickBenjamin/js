/** */
/**
 * @param {number} n - Número inicial del contador
 * @return {Function} - Función de contador
 */

/** 
var createCounter = function(n) {
    let si = n; // Variable que guarda el estado del contador
    
    // Retornamos una función que incrementará y devolverá el valor actual
    return function() {
        return si++; // Devuelve el valor actual y luego lo incrementa
    };
};

/** Ejemplo de uso 
const counterr = createCounter(10); // Creamos el contador con n = 10
console.log(counterr()); // 10
console.log(counterr()); // 11
console.log(counterr()); // 12 
*/



function createAdvancedCounter(start) {
    
    let count = start;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        reset: function() {
            count = start;
            return count;
        },
        getValue: function() {
            return count;
        }
    };
}

const counter = createAdvancedCounter(10);
console.log(counter.getValue()); // 10
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
console.log(counter.reset()); // 10
