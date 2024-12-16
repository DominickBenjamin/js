let mensaje = "¡Feliz Navidad!";

// Obtener la longitud del mensaje
let mensajenum = mensaje.length;

// Crear el borde dinámico
let border = "*".repeat(mensajenum+2); // 2 asteriscos extra para los lados

// Crear el mensaje con el borde
let mensajefinal = `*${mensaje}*`;

console.log(border); // Imprime el borde superior
console.log(mensajefinal); // Imprime el mensaje enmarcado
console.log(border); // Imprime el borde inferior

