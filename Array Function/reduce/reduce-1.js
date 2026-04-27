const numbs = [10, 20, 30, 40, 50];

const totalOfNumbs = numbs.reduce((totalOfNumbs, numb) =>{
    return totalOfNumbs + numb;
},0)

console.log(totalOfNumbs);