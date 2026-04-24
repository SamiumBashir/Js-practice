const students = [
  { name: 'Abir', marks: 85 },
  { name: 'Hasan', marks: 72 },
  { name: 'Sumi', marks: 90 }
];

const ispassed = students.map(student => {
    if(student.marks > 80){
        return true;
    } else{
        return false;
    }
});

console.log(ispassed)