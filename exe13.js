// Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário
function factorial(number) {
  let total = 1
  for (let i = 1; i <= number; i++) {
    total = total * i
  }

  return total
}

console.log(factorial(3))
console.log(factorial(5))
console.log(factorial(20))