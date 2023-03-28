const days = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

function getDay(number) {
  if (number < 1 || number > 7) return 'Invalid Day'

  return days[number - 1]
}

console.log(getDay(0))
console.log(getDay(1))
console.log(getDay(2))
console.log(getDay(3))
console.log(getDay(4))
console.log(getDay(5))
console.log(getDay(6))
console.log(getDay(7))
console.log(getDay(8))