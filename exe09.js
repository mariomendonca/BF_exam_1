const products = [
  {
    name: 'File Duplo',
    price: 4.9,
    priceAbove: 5.8
  },
  {
    name: 'Alcatra',
    price: 5.9,
    priceAbove: 6.8
  },
  {
    name: 'Picanha',
    price: 6.9,
    priceAbove: 7.8
  },
]

const { question } = require('readline-sync')
const type = question('qual tipo de carne? ')
const quantity = question('qual quantidade? ')
const isCard = question('Cartao do local? (S/N) ')

function createCupomFiscal(type, quantity, isCard) {
  isCard = isCard.toUpperCase() === 'S'
  const product = products.find(item => item.name === type)
  if (!product) return 'Product not found'

  const price = quantity > 5 
      ? product.priceAbove * quantity
      : product.price * quantity
  return {
    product: product.name,
    quantity,
    price: isCard ? price - (price * 0.05) : price
  }
}

console.log(createCupomFiscal(type, quantity, isCard))
