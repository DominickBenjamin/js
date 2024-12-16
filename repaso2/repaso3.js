let nombres = ["Alice", "Bob", "Charlie"];

/// .map ((el valor que tiene exactament como esta escrito, y luego su posicion))
let listaNumerada = nombres.map((nombre, index) => `${index}. ${nombre}`);

console.log(listaNumerada.join("\n"));
