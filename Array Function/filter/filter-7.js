const products = [
  { id: 1, name: "Laptop", price: 50000, category: "Tech" },
  { id: 2, name: "Mouse", price: 1500, category: "Tech" },
  { id: 3, name: "Keyboard", price: 2500, category: "Tech" },
  { id: 4, name: "Bottle", price: 500, category: "Life" }
];

const premiumTech = products.filter(product => {
    return product.price > 1000 && product.category === 'Tech';
}).map(product => product.name)

// console.log(premiumTech);
