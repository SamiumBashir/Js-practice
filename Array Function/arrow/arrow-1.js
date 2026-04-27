const products = [{id: 1, name: 'Laptop', price: 1200}, {id: 2, name: 'Phone', price: 800}, {id: 3, name: 'Tablet', price: 500}];

const maxProd = products.filter (product => {
    return product.price > 1000
})

console.log(maxProd);

const nameList = products.map (product => {
    return product.name
})

console.log('Products Name:', nameList);

const totalPrice = products.reduce((totalPrice, product) => {
    return totalPrice + product.price
}, 0);

console.log(totalPrice);

const searchItem = products.find(product =>{
    return product.id === 2;
})

console.log(searchItem);