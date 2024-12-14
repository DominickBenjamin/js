const numeros = [-10, 0, 5, -3, 8, -2, 7];

const filtrar = () => {

    const yafiltrado = numeros.filter((num => num >=0));
    return yafiltrado;
}

console.log(filtrar());

