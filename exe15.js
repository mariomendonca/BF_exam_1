// Desenvolva um programa que faça a tabuada de um número qualquer 
// inteiro que será digitado pelo usuário, mas a tabuada não deve necessariamente
// iniciar em 1 e terminar em 10, o valor inicial e final devem ser informados
// também pelo usuário
const { question } = require('readline-sync')
const number = question('tabuada de: ')
const start = question('inicio: ')
const end = question('fim: ')

function tabuada(number, start, end) {
  for (let i = start; i <= end; i++) {
    console.log(`${number} x ${i} = ${number * i}`)
  }
}

tabuada(number, start, end)