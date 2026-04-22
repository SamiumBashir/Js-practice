const cart = [
  { product: 'Shirt', price: 1200 },
  { product: 'Pant', price: 2500 }
];

const amountToPay = cart.map(item => {
    const vat = item.price * 15/100;
    const total = item.price + vat;

    return {
    product: item.product,
    totalWithVat: total.toFixed(2)
  };
});
console.log(amountToPay)