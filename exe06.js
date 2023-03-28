// calculo da folha salarial
// Salário Bruto até 900 (inclusive) - isento
// Salário Bruto até 1500 (inclusive) - desconto de 5%
// Salário Bruto até 2500 (inclusive) - desconto de 10%
// Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220
function totalSalary(hours, hourPrice) {
  const salary = hours * hourPrice
  let ir = 0
  if (salary > 900 && salary <= 1500) {
    ir = salary * 0.05
  } else if (salary > 1500 && salary <= 2500) {
    ir = salary * 0.1
  } else if (salary)
  ir = salary * 0.2

  console.log(salary, ir, salary * 0.1)
  return salary - ir - (salary * 0.1)
}

console.log(totalSalary(160, 50))
