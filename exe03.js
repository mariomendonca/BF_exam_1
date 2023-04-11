const { question } = require('readline-sync')
const age = question('qual idade? ')
const isStudent = question('é estudante? (S/N)')

function isHalfTicket(isStudent, age) {
  return isStudent.toUpperCase() === 'S' || age >= 60
}

console.log(isHalfTicket(isStudent, age))
