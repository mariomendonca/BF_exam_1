// Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário
const { question } = require('readline-sync')
const number = Number(question('Fatorial de: '))

function factorial(number) {
  let total = 1
  for (let i = 1; i <= number; i++) {
    total = total * i
  }

  return total
}

console.log(factorial(number))
