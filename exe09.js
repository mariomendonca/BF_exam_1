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

function createCupomFiscal(type, quantity, isCard) {
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

console.log(createCupomFiscal('File Duplo', 6, true))
console.log(createCupomFiscal('File Duplo', 6, false))
console.log(createCupomFiscal('File Duplo', 5, true))
console.log(createCupomFiscal('File Duplo', 5, false))
console.log(createCupomFiscal('Alcatra', 5, false))
console.log(createCupomFiscal('File', 5, false))