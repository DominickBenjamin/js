function outer() {

    let count = 15;

    return {  // Esta función es un closure

        aumentar() {
            count++;
            return count;
        },
        disminuir() {
            count--;
            return count;
        },
        reset() {
            count = 15;
            return count;
        },
    }

}

const tilin = outer();
console.log(tilin.aumentar());
console.log(tilin.disminuir());
console.log(tilin.reset());
console.log(tilin.aumentar());
console.log(tilin.aumentar());
console.log(tilin.aumentar());
console.log(tilin.reset());
console.log(tilin.disminuir());
