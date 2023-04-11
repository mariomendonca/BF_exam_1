const { question } = require('readline-sync')
const number1 = question('qual 1 número? ')
const number2 = question('qual 2 número? ')

function studentStatus(a, b) {
  a = Number(a)
  b = Number(b)
  if (a < 0 || a > 10 || b < 0 || b > 10) {
    return 'nota inválida'
  }

  console.log(a + b)

  const average = (a + b) / 2
  if (average < 4) {
    return 'reprovado'
  } else if (average < 7) {
    return 'final'
  } else {
    return 'aprovado'
  }
}

console.log(studentStatus(number1, number2))
