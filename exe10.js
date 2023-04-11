// Um posto está vendendo combustíveis com a seguinte tabela de descontos:Álcool:até 20 litros, desconto de 3% por litroacima de 20 litros, desconto de 5% por litroGasolina:até 20 litros, desconto de 4% por litroacima de 20 litros, desconto de 6% por litro

// Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 5,00 o preço do litro do álcool é R$ 4,00.
const rl = require('readline-sync')

fuel = rl.question('Voce deseja alcool (A) ou gasolina (G)? ')
quantity = rl.question('Quantos litros? ')

if (fuel.toUpperCase() === 'A') {
  if (quantity < 20) {
    const price = (quantity * 4)
    const discount = (price * 0.04)
    const total = price - discount
    console.log(`${price} - ${discount} = ${total}`)
  } else {
    const price = (quantity * 4)
    const discount = (price * 0.06)
    const total = price - discount
    console.log(`${price} - ${discount} = ${total}`)
  }
} elif (fuel.toUpperCase() === 'G') {
  if (quantity < 20) {
    const price = (quantity * 5)
    const discount = (price * 0.05)
    const total = price - discount
    console.log(`${price} - ${discount} = ${total}`)
  } else {
    const price = (quantity * 5)
    const discount = (price * 0.03)
    const total = price - discount
    console.log(`${price} - ${discount} = ${total}`)
  }
  
}
