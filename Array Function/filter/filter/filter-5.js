const searchKeyword = 'ha';
const names = ['Hasan', 'Abir', 'Hamid', 'Sumi', 'Farhan'];

const searchReasult = names.filter(name => {
    const checkList = name.toLowerCase();
    return checkList.includes(searchKeyword.toLowerCase());
});
console.log(searchReasult)