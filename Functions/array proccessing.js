// Array Function & Callback Function

// const numbs = [1, 2, 3, 4, 5, 6]

// const finalNumber = numbs.map(num => num * 3);
// console.log(finalNumber);


// Recursive Function

function factorial (n){
    if(n ===1){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(9));