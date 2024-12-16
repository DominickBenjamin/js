let palabras = ["Perro", "Gato", "Elefante", "Ratón"];

let mascorto = Math.min(...palabras.map(palabra => palabra.length));

console.log(mascorto);