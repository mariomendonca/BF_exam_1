// Faça um programa que peça um número inteiro e determine se ele é ou 
// não um número primo. Um número primo é aquele que é divisível somente 
// por ele mesmo e por 1.
function isPrimo(number) {
  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && !(number === i || i === 1)) {
      return false 
    }
  }
  return true
}



console.log(isPrimo(4))
console.log(isPrimo(1))
console.log(isPrimo(2))
console.log(isPrimo(3))
console.log(isPrimo(7))
console.log(isPrimo(10))
console.log(isPrimo(11))
console.log(isPrimo(37))
console.log(isPrimo(53))
console.log(isPrimo(52))
