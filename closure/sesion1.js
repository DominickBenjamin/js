/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "hola";
    }
};


const f = createHelloWorld();
console.log(f()); 
 