// Faça um programa que peça um número inteiro e determine se ele é ou 
// não um número primo. Um número primo é aquele que é divisível somente 
// por ele mesmo e por 1.
const { question } = require('readline-sync')
const number = Number(question('digite um número: '))
function isPrimo(number) {
  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && !(number === i || i === 1)) {
      return false 
    }
  }
  return true
}



console.log(isPrimo(number))