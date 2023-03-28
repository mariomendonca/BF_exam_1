function studentStatus(a, b) {
  if (a < 0 || a > 10 || b < 0 || b > 10) {
    return 'nota inválida'
  }

  const average = (a + b) / 2
  if (average < 4) {
    return 'reprovado'
  } else if (average < 7) {
    return 'final'
  } else {
    return 'aprovado'
  }
}

console.log(studentStatus(10, 10))
console.log(studentStatus(10, 8))
console.log(studentStatus(10, 11))
console.log(studentStatus(0, 9))
console.log(studentStatus(-1, 9))
console.log(studentStatus(1, 5))