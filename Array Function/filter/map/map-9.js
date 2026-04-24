const cart = [
  { item: 'Laptop', price: 50000 },
  { item: 'Mouse', price: 1500 },
  { item: 'Keyboard', price: 3000 }
];

const newprice = cart.map(product => {
    let updatedPrice = product.price
    if(product.price > 2000){
        updatedPrice = product.price - 500;
    }
    return{
        item : product.item,
        peice : updatedPrice
    };
})
console.log(newprice)