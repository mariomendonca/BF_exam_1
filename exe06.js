// Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// Desconto do IR:
// Salário Bruto até 900 (inclusive) - isento
// Salário Bruto até 1500 (inclusive) - desconto de 5%
// Salário Bruto até 2500 (inclusive) - desconto de 10%
// Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220
// A resposta do programa deverá ter a seguinte organização:

// =============== CALCULADORA DE SALÁRIO 

// =============== 
// Salário Bruto: (5 * 220)     : R$ 1100,00
//         (-) IR (5%)                    : R$   55,00  
//         (-) INSS ( 10%)            : R$  110,00
//         FGTS (11%)                 : R$  121,00
// Total de descontos            : R$  165,00
//  Salário Liquido                  : R$  935,00
const rl = require('readline-sync')

const sindicato = 0.03
const FGTS = 0.11
const inss = 0.1

const hours = rl.question('Quantas horas?')
const price = rl.question('Qual preço por hora?')

const salary = hours * price

let ir = 0
if (salary > 900 && salary <= 1500) {
  ir = salary * 0.05
} else if (salary > 1500 && salary <= 2500) {
  ir = salary * 0.1
} else if (salary)
ir = salary * 0.2

console.log(`Bruto (${hours} ${price}) : ${salary}`)
console.log(`IR (${ir * 100}%) : ${salary * ir}`)
console.log(`FGTS (${FGTS * 100}%) : ${salary * FGTS}`)
console.log(`inss (${inss * 100}%) : ${salary * inss}`)
console.log(`sindicato (${sindicato * 100}%) : ${salary * sindicato}`)
console.log(`total : ${salary - (ir * salary) - (salary * sindicato) - ${salary * inss}}`)


// function totalSalary(hours, hourPrice) {
//   const salary = hours * hourPrice
//   let ir = 0
//   if (salary > 900 && salary <= 1500) {
//     ir = salary * 0.05
//   } else if (salary > 1500 && salary <= 2500) {
//     ir = salary * 0.1
//   } else if (salary)
//   ir = salary * 0.2

//   console.log(salary, ir, salary * 0.1)
//   return salary - ir - (salary * 0.1)
// }

// console.log(totalSalary(160, 50))
