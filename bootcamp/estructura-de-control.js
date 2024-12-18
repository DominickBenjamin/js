// Estructuras de control

// if (condition) {

const showMessage = true

if (showMessage) {
  console.log('Hola Mundo!')
}

const age = 25

if (age >= 18) {
  console.log('Eres mayor de edad')
} else {
  console.log('Eres menor de edad')
}

switch (age) {
  case 18:
    console.log('Tienes 18 años')
    break
  case '30':
    console.log('Tienes 30 años')
    break
  default:
    console.log('No tienes 18 ni 30 años')
    break
}

let i = 10
for (; i >= 0;i--) {
  if (i % 2 == 0) {
    continue
  }
  console.log({i})
}
console.log('*'.repeat(30))
let j = 0

while (j <= 10) {
  console.log({j })
  j++
}


console.log('*'.repeat(30))

n = 20;
while (n >= 0) {
  console.log({n})
  n -= 10
}

m = 50

do  {
  console.log({m})
  if (m == 30) {
    break
  }
} while (m -= 10)
