const numeros = [12, 3, 7, 1, 5];

function ordenar () {
  return numeros.sort ((a,b) => a - b);
}


console.log(ordenar());