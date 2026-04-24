const products = [
  { name: 'Laptop', price: 50000 },
  { name: 'Phone', price: 20000 },
  { name: 'Watch', price: 5000 }
];


const price = products.map(products => products.price);
const finalPrice = price.map(price => price * 1.1);
console.log(finalPrice);