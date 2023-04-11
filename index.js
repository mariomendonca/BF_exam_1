const array = [
  {
    nota: 5
  },
  {
    nota: 5
  },
  {
    nota: 3
  },
  {
    nota: 3
  },
]
const sum = array.reduce((a, b) => a + b.nota,0)

const minGrade = array.reduce((a, b) => {
  return (a.nota <= b.nota) ? a : b
})
const maxGrade = array.reduce((a, b) => {
  return (a.nota >= b.nota) ? a : b
})

console.log(sum)
console.log(minGrade)
console.log(maxGrade)
