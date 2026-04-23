const inventory = [
  { id: 1, name: "Laptop", price: 1200, tags: ["electronics", "work"] },
  { id: 2, name: "Coffee Mug", price: 15, tags: ["kitchen", "home"] },
  { id: 3, name: "Headphones", price: 200, tags: ["electronics", "audio"] },
];

// Filter practice

const electronics = inventory.filter(product =>{
    return product.tags.includes('electronics')
})

console.log(electronics);

// Find Practice 

const maxPrice = inventory.find(firstItem => firstItem.price > 500);
console.log('First Item over 500 taka:', maxPrice.name)

const priceLabel = inventory.map( product => {
    return `${product.name}: $${product.price}`
})

console.log(priceLabel)