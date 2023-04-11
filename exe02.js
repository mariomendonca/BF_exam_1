const { question } = require('readline-sync')
const number = question('qual número? ')

function oddOrEven(number) {
  return number % 2 === 0 ? 'is even' : 'is odd'
}

console.log(oddOrEven(number))
