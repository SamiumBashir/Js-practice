const products = [
  { id: 1, name: 'Phone', brand: 'Samsung' },
  { id: 2, name: 'Laptop', brand: 'Apple' }
];

const productList = products.map (product =>{
    return `Product: ${product.name}, Brand: ${product.brand}`
})

console.log(productList)