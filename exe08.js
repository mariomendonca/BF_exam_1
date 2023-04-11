const { question } = require('readline-sync')
const number1 = question('qual 1 número? ')
const number2 = question('qual 2 número? ')
const number3 = question('qual 3 número? ')

function equation(a, b, c) {
  a = Number(a)
  b = Number(b)
  c = Number(c)

  if (a === 0) return 'Equação não é do segundo grau'

  const delta = (b ** 2) - (4 * c * a)
  if (delta < 0) return 'Não existe raiz real'
  if (delta === 0) return '1 raiz'
  if (delta > 0) return '2 raizes'
}


console.log(equation(number1, number2, number3))
