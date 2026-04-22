// const items = [{ name: 'Pen', price: 10 }, { name: 'Book', price: 50 }];
// const shallowItems = [...items];

// shallowItems[0].price = 20;
// console.log(shallowItems)

const list = [1, 2, [3, 4]];
const listCopy = [...list];


// console.log(list);
// console.log(listCopy);
// console.log(list === listCopy); 
// console.log(list[2] === listCopy[2]);

const task = {
  title: 'Learn JS',
  info: { status: 'Pending' }
};

const newTask = structuredClone(task)
newTask.info.status = 'completed';
console.log(task.info.status)