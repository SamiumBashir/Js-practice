const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

const newArray = numbers.reduce((acc, number) => {
    if(!acc.includes(number)) {  //not includes
        acc.push(number) // then push
    } 
    return acc
}, []);

// console.log(newArray)

const members = [
  { name: "Rahim", deposit: 500 },
  { name: "Karim", deposit: 700 },
  { name: "Sagor", deposit: 300 }
];

const totalDepo = members.reduce((total, deposit) => {
    return total + deposit.deposit;
}, 0)

console.log(totalDepo)