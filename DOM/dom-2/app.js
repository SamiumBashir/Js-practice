const inputText = document.getElementById("todo_input"); // to get the input field
const btn = document.getElementById("add_btn"); // to get the btn
const list = document.getElementById("todo_list"); // to get the unordered list

//click on btn
btn.addEventListener("click", () => {
  const taskValue = inputText.value; // input feild er value collect kore
  const li = document.createElement("li"); // create a element in html file
  li.innerText = taskValue + " "; // put the value which I get from input.
  list.appendChild(li); // finally append the child with its parents
  inputText.value = ""; // for clear the input feild
});
