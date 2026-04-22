const user = {
  id: 1,
  address: {
    city: 'Rangpur',
    country: 'Bangladesh'
  }
};

// const userCopy = JSON.parse(JSON.stringify(user));
const userCopy = {...user} 
userCopy.address.city = 'barisal'
console.log(user.address.city);