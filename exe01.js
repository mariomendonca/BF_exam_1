function genderAndAge(gender, age) {
  const userGender = gender === 'M' ? 'masculino' : gender ===     'F' ? 'feminino' : 'não identificado'
  const userAge = age > 9 ? 'não é criança' : 'é criança'
  return `Sexo ${userGender} e ${userAge}`
}

console.log(genderAndAge('F', 20))
console.log(genderAndAge('F', 9))
console.log(genderAndAge('M', 8))
console.log(genderAndAge('G', 8))
