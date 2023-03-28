function isHalfTicket(isStudent, age) {
  return isStudent || age >= 60
}

console.log(isHalfTicket(false, 60))
console.log(isHalfTicket(false, 50))
console.log(isHalfTicket(true, 50))