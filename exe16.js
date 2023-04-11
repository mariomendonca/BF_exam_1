let students = []
const { question } = require('readline-sync')
let another

do {
  const questions = []
  const name = question('Nome do aluno: ')
  for (let i = 1; i < 11; i++) {
    const answer = question(`${i} questao: `)
    questions.push(answer)
  }

  const student = {
    name,
    questions,
  }

  students.push(student)
  
  another = question('outro aluno? (s/n)')
} while (another?.toUpperCase() === 'S')

const gabarito = []
for (let i = 1; i < 11; i++) {
  const answer = question(`${i} questao: `)
  gabarito.push(answer)
}

function compareGabarito(gabarito, questions) {
  let sum = 0
  for (let i = 0; i < 10; i++) {
    if (gabarito[i] === questions[i]) {
      sum += 1
    }
  }
  return sum
}


students = students.map(item => {
  return {
    ...item,
    nota: compareGabarito(gabarito, item.questions)
  }
})

console.log(students)

const sum = students.reduce((a, b) => a + b.nota, 0)
const average = sum / students.length

const min = students.reduce((a, b) => {
  return (a.nota <= b.nota) ? a : b
})
const max = students.reduce((a, b) => {
  return (a.nota >= b.nota) ? a : b
})

const maxGrade = students.filter(item => item.nota === max.nota).map(item => item.name).join(', ')
const minGrade = students.filter(item => item.nota === min.nota).map(item => item.name).join(', ')

console.log(`Total de alunos: ${students.length}`)
console.log(`Media: ${average}`)
console.log(`Melhor nota: ${maxGrade}`)
console.log(`Pior nota: ${minGrade}`)
