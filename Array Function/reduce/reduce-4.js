const users = [
  { id: 'a1', name: 'Rahim', age: 25 },
  { id: 'b2', name: 'Karim', age: 30 },
  { id: 'c3', name: 'Sagor', age: 22 }
];

const newArray = users.reduce((acc, user) => {
    const id = user.id;
    if(!acc[id]){
        acc[id] =[]
    }
    acc[id].push(user.name, user.age);
    return acc;
}, {})

// console.log(newArray)


const cart = [
  { product: "Laptop", price: 50000, quantity: 1 },
  { product: "Mouse", price: 1500, quantity: 2 },
  { product: "Keyboard", price: 2500, quantity: 1 },
  { product: "Monitor", price: 12000, quantity: 2 }
];

const finalPrice = cart.reduce((acc, item) => {
    itemTotal = item.price * item.quantity;
    return acc + itemTotal;
}, 0)

console.log(finalPrice);