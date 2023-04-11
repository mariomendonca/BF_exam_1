// Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.
const { question } = require('readline-sync')
const numbers = []
for (let i = 0; i < 10; i++) {
  const number = Number(question(`numero ${i + 1}? `))
  numbers.push(number)
}


function quantityOfOddAndEven(numbers) {
  const evens = []
  const odds = []
  for (let i = 0; i < 10; i++) {
    numbers[i] % 2 === 0 
      ? evens.push(numbers[i])
      : odds.push(numbers[i])
  }

  return `Evens: ${evens.length} | Odds: ${odds.length}`
}

console.log(quantityOfOddAndEven(numbers))