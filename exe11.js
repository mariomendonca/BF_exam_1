// Faça um programa que peça dois números, base e expoente, calcule e mostre o
// primeiro número elevado ao segundo número. Não utilize a função de potência 
// da linguagem.
const { question } = require('readline-sync')
const base = Number(question('base? '))
const expoente = Number(question('expoente? '))
function potencia(base, expoente) {
  let total = 1
  for (let i = 0; i < expoente; i++) {
    total = total * base
  }
  return total
}

console.log(potencia(base, expoente))
