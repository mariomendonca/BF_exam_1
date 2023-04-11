const { question } = require('readline-sync')

const gender = question('qual genero? ')
const age = question('qual idade? ')

function genderAndAge(gender, age) {
  const userGender = gender.toUpperCase() === 'M' ? 'masculino' : gender.toUpperCase() ===     'F' ? 'feminino' : 'não identificado'
  const userAge = age > 9 ? 'não é criança' : 'é criança'
  return `Sexo ${userGender} e ${userAge}`
}

console.log(genderAndAge(gender, age))

