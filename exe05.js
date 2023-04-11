const { question } = require('readline-sync')
const number1 = question('qual 1 número? ')
const number2 = question('qual 2 número? ')
const number3 = question('qual 3 número? ')

function bigger(a,b,c) {
  a = Number(a)
  b = Number(b)
  c = Number(c)
  if (a > b && a > c) {
    return a
  } else if (b > c) {
    return b
  } else {
    return c
  }
}

console.log(bigger(number1, number2, number3))