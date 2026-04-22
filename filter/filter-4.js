const stock = [
  { item: 'Laptop', inStock: true },
  { item: 'Mouse', inStock: false },
  { item: 'Keyboard', inStock: true },
  { item: 'Monitor', inStock: false }
];

const availableStock = stock.filter( product => {
    return product.inStock === true;
})

console.log(availableStock);