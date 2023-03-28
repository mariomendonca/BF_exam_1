// Faça um programa que peça dois números, base e expoente, calcule e mostre o
// primeiro número elevado ao segundo número. Não utilize a função de potência 
// da linguagem.
function potencia(base, expoente) {
  let total = 1
  for (let i = 0; i < expoente; i++) {
    total = total * base
  }
  return total
}

console.log(potencia(2, 3))
console.log(potencia(2, 5))
console.log(potencia(5, 3))
console.log(potencia(5, 1))
