const students = [
  { id: 10, name: 'Rubaiat', gpa: 3.94 },
  { id: 15, name: 'Abir', gpa: 3.50 },
  { id: 20, name: 'Hasan', gpa: 3.80 }
];

const firstStudent = students.find( student => {
    return student.id === 20;
})
console.log(firstStudent)