const { question } = require('readline-sync')
const number = question('qual dia da semana? ')

const days = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

function getDay(number) {
  number = Number(number)
  if (number < 1 || number > 7) return 'Invalid Day'

  return days[number - 1]
}

console.log(getDay(number))
