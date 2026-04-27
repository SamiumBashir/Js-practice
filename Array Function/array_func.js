// const products = [{name: 'Laptop', price: 1200, brand: 'Dell'}, {name: 'Phone', price: 800, brand: 'Apple'}, {name: 'Watch', price: 200, brand: 'Apple'}];

// // No.1 problem solution

// const appleProd = products.filter(product => {
//     return product.brand === 'Apple'
// })

// // console.log(appleProd); //Solved

// // No. 2 Solution

// const newReck = products.map(product => product.name);
// // console.log(newReck)

// const lowestPrice = products.find(product => {
//     return product.price < 800;
// })

// // console.log(lowestPrice);


// const totalPrice = products.reduce((total, product) =>{
//     return total + product.price;
// },0)
// // console.log(totalPrice);



// const a = [1, 2, 3];
// const b = [4, 5, 6];

// const c =[...a, ...b]
// console.log(c);

let user1 = { name: 'Rahim', age: 25 };
let user2 = user1;
user2.name = 'Karim';

console.log(user1.name) //changes the value of user1 . cause of 