const categories = {};
const category = 'fruits';
const item = 'apple';

categories[category] ??= []; // Si no existe 'fruits', lo inicializas como un array vacío
categories[category].push(item); // Agregar el item 'apple' a la categoría
console.log(categories);
