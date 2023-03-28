function bigger(a,b,c) {
  if (a > b && a > c) {
    return a
  } else if (b > c) {
    return b
  } else {
    return c
  }
}

console.log(bigger(1,2,3))
console.log(bigger(3,2,1))
console.log(bigger(2,3,1))