const edades = [18, 21, 17, 16, 20, 19, 21, 17];

//¿Cómo ordenarías las edades de menor a mayor 
// y luego eliminarías los duplicados?

const ordenar = () => {

    edades.sort((a,b) => a-b);
    return [...new Set(edades)]; 


}


console.log(ordenar());