let nombres = ["Alice", "Bob", "Charlie"];

let maxLength = Math.max(...nombres.map(nombre => nombre.length)); 

let borde = "*".repeat(maxLength + 4); 

let nombresEnmarcados = nombres.map(nombre => `* ${nombre.padEnd(maxLength)} *`);
console.log(borde); 
console.log(nombresEnmarcados.join("\n")); 
console.log(borde);
