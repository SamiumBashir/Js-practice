const product = {
  id: 1,
  name: "Gaming Mouse",
  price: 1500,
  features: ["RGB", "Fast Sensor"]
};

const shallowProduct = {...product};


shallowProduct.features.push('wireless');

console.log(shallowProduct);
console.log(product);