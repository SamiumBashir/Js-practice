const orders = [
  { orderId: 101, details: { item: 'Laptop', brand: 'HP' } },
  { orderId: 102, details: { item: 'Mouse', brand: 'Logitech' } },
  { orderId: 103, details: { item: 'Keyboard', brand: 'A4Tech' } }
];

// const orderName = orders.map(orders => orders.details);
// const itemName = orderName.map(details => details.item)
// console.log(orderName)
// console.log(itemName)
const orderName = orders.map(orders => orders.details.item);
console.log(orderName);