const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbs = numbers.filter(numbs =>{
    
    return numbs % 2 === 0;
})

const squareNumbs = evenNumbs.map(num => {
    return num * num
});
console.log(squareNumbs);