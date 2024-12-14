const uno = function outer(n) {
    let count = n;  // Variable en el entorno de la función exterior

    return function inner() {  // Esta función es un closure
        count++;
        return count;
    };
}

const counter = uno(10);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
