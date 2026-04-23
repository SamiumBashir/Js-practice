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

console.log(priceLabel);


// Shallow Copy

const shallowInventory = [...inventory] // shallow কপিতে মূল অবজেক্ট বা অ্যারের ডাটা চেঞ্জ করে। 
shallowInventory[0].name = 'Super Laptop';
console.log(shallowInventory[0]);
console.log(inventory[0]);

// Deep Copy

const deepInventory = JSON.parse(JSON.stringify(inventory));
deepInventory[0].price = 0;
console.log(deepInventory[0].price);
console.log(inventory[0].price);