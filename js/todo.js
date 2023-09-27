const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");

}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleTodoSubmit);
