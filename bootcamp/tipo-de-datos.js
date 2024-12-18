let num = 10;

num += 10;

num *= 2;

num /= 5;

num = 9;

const PI = 3.1415990345435;

console.log(8, num.toString(2))
console.log('PI:', PI.toFixed())
console.log(10..toString(2))

console.log(typeof num == 'number');

// Strings

let str = '   Hello World!   ';

let str2 = String('Hello World!')

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.length)
console.log(str.split(' '))
console.log(str.charAt(str.length - 1))
console.log(str.at(-1))
console.log(str.indexOf('H') >= 0)
console.log(str.includes('Z'))
console.log(str.endsWith('!'))
console.log(str.trim())
console.log('*'.repeat(20))
console.log('Hola'.concat(' Mundo'))
console.log('*'.repeat(20))

let isActive = true;

console.log(!isActive)

+'3.1415a'  // -> NaN
parseInt('3.1415a') // -> 3
parseFloat('3.1415a') // -> 3


// Arrays

// let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, '10']; // TypeScript

// int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}; // C++, Java, C#

let arr = [1, true, null, 2, '3', 4, 5, 6, 7, 8, 9, 10];

console.log('length >', arr.length)

// arr = [] // <- limpiar el array

arr.length = 100;
arr[90] = 1000

console.log('length >', arr.length, arr)

const numbers = [10, 20, 30, 40]
numbers.push(50)

// const last = numbers[numbers.length - 1]
// numbers.pop()

const last = numbers.pop()
console.log(last)

console.log(numbers.at(-3))  // 20
console.log(numbers.concat(100,200,300)) // [10, 20, 30, 40, 50, 100, 200, 300]
console.log(numbers.indexOf(50)) // 
console.log(numbers.includes(100)) // false

let username = 'Manu.el'

console.log('Manu.el'.replace('.', ''))
console.log(username.split('.').join(''))

username[4] = ''
let cleanUsername = username.split('')
cleanUsername[4] = ''
username = cleanUsername.join('')
console.log(username)

let sum = 0;
// [10, 20, 30, 40]
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]
}

/*
  1.
  function sum (acc, cur) {
      return acc + cur
  }

  numbers.reduce(sum, 0)
  
  2.
  numbers.reduce(function (acc, cur) {
      return acc + cur
  }, 0)

  3. 
  numbers.reduce((acc, cur) => acc + cur, 0)
*/

const numbersX2 = []
for (let i = 0; i < numbers.length; i++) {
  numbersX2[i] = numbers[i] * 2
}

/*
  numbers.map(function (n) { return n * 2 })
*/

console.log('Sum:', sum)
console.log('numbersX2:', numbersX2)

const multiplosDe4 = []

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 4 == 0) { // if (!(numbers[i] % 4)) {
    multiplosDe4.push(numbers[i])
  }
}

/**
 numbers.filter(function (n) { return n % 4 == 0 }) 
 */

if (multiplosDe4.length) { // multiplosDe4.length > 0
  console.log('Hay multiplos de 4')
}

console.log('multiplosDe4:', multiplosDe4)


const numberX3 = []
let sum2 = 0

numbers.forEach(function (n, i) {
  // numberX3[i] = numbers[i] * 3
  sum2 += n
})

console.log('numberX3:', numberX3)
console.log('sum2:', sum2)

numbers.unshift(-10)

numbers.shift()

const nums = [[1, 2, 3], [2, ,3 ,4 ]]
