const input = document.getElementById('todo__input');
const btn = document.getElementById('add__btn');
const list = document.getElementById('todo__list');

btn.addEventListener("click", () => {
    const taskValue = input.value;
    if(taskValue === ''){
        alert('Write a task')
        return;
    }

    const li = document.createElement('li');
    li.innerText = taskValue;
    list.appendChild(li);
    input.value = '';
});


document.get
