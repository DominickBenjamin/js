// Objects

const person = {
  name: 'Manuel',
  email: 'madepozo.dev@gmail.com'
}

person.greet = function greet () {
  console.log('Hola, me llamo:' + this.name)
}

person.test = 'Testing'

console.log(person)

delete person.test

console.log(person)

for (const key in person) {
  console.log(key,' : ', person[key])
}

Object.keys(person) // devuelve un array con las llaves del objeto

Object.values(person) // devuelve un array con los valores del objeto

/*const inventario = [
  { nombre: 'Manzanas', cantidad: 2, tipo: 'fruta' },
  { nombre: 'Bananas', cantidad: 0, tipo: 'fruta' },
  { nombre: 'Cerezas', cantidad: 5, tipo: 'fruta'},
  { nombre: 'Tomate', cantidad: 10, tipo: 'verdura' }
]

Object.groupBy(inventario, function (item) {
  return item.tipo
})*/

// Funciones

function sumN(...n) { // ...n = rest parameter
  // a = a || 0 // a ??= 0 | a = ~~a
  // b = b || 0
  let result = 0

  for (let i = 0; i < n.length; i++) {
    result += n[i]
  }

  return result;
}

const sumN2 = (n) => n.reduce((acc, cur) => acc + cur, 0)

console.log('sumN -> 1:', sumN(10, 20, 30, 40, 50, 60, 70, 80, 90, 100))
console.log('sumN -> 2:', sumN(100, 200))
console.log('sumN -> 3:', sumN(5))

console.log(Math.max(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 101))