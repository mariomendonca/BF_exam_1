// Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.

const numbers = [
  1,3,4,5,6,33,43,22,26,23
]

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