// const cart = [
//   { product: "Laptop", price: 50000 },
//   { product: "Mouse", price: 1500 },
//   { product: "Keyboard", price: 2500 }
// ];

// const totalPrice = cart.reduce((prices, cartPrice) => {
//     return prices + cartPrice.price
// },0)

// console.log(totalPrice);



const people = [
  { name: "Abir", age: 20 },
  { name: "Nila", age: 25 },
  { name: "Siyam", age: 20 }
];

const groupedByAge = people.reduce((acc, person) => {
  const age = person.age;

  if (!acc[age]) {
    acc[age] = [];
  }

  acc[age].push(person);

  return acc;
}, {});

console.log(groupedByAge);