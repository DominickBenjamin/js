let nombres = ["Mario", "Ana", "Cristina"];

let nomlength = Math.max(...nombres.map(nombre => nombre.length));

let border = "-".repeat(nomlength+4);

let nombresEnmarcados = nombres.map(nombre => `* ${nombre.padEnd(nomlength)} *`)

console.log(border);
console.log(nombresEnmarcados.join("\n"));
console.log(border);