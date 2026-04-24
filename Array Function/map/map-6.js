const categories = ['Tech', 'Health', 'Education'];

const newCategory = categories.map(category => {
  return `<li>${category}</li>`
})
console.log(newCategory);