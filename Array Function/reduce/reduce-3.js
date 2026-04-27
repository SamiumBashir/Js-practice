const names = ["Rahim", "Karim", "Rahim", "Sagor", "Karim", "Rahim"];

const totalNames = names.reduce((acc, names) => {
    acc[names] = (acc[names] || 0) +1;
    return acc;
}, {});
console.log(totalNames);