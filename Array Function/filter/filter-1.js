const phones = [
  { name: 'Samsung S24', price: 95000 },
  { name: 'Xiaomi 14', price: 75000 },
  { name: 'iPhone 15', price: 120000 },
  { name: 'Redmi Note 13', price: 25000 }
];

const expensivePhones = phones.filter(phone => {
    return phone.price >80000;
})

console.log(expensivePhones)