const frutas = ['manzana', 'pera', 'manzana', 'uva', 'pera', 'mango'];

const noduplicados = () => {

    return [...new Set (frutas)];
}

console.log(noduplicados())