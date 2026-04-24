const users = [
  { firstName: 'Rubaiat', lastName: 'Hasan' },
  { firstName: 'Abir', lastName: 'Mahmud' },
  { firstName: 'Sumi', lastName: 'Akter' }
];

// const userMail = users.map(user => {
//     const fullName = (user.firstName+user.lastName).toLowerCase();
//     return `${fullName}@gmail.com` 
// })

// console.log(userMail);

const userMail = users.map(user => {
    const mailFirstName = user.firstName.toLowerCase();
    // console.log(mailFirstName)

    const mailLastName = user.lastName.toLowerCase();
    // console.log(mailLastName);
    const fullName = mailFirstName + mailLastName;
    return fullName+'@gmail.com';
})

console.log(userMail);