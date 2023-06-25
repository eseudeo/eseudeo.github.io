const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const clickTOdo = event.target.parentElement;
  clickTOdo.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(clickTOdo.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const div = document.createElement("div");
  div.id = newTodo.id;
  div.className = "todolist-div";

  const todoHeader = document.createElement("div");
  todoHeader.className = "todotitle-div";
  todoHeader.innerText = newTodo.text.slice(0, 1);

  const todoTitle = document.createElement("span");
  todoTitle.innerText = newTodo.text;
  todoTitle.className = "todoTitle";

  const todoDiv = document.createElement("div");
  todoDiv.className = "todo-div";
  todoDiv.appendChild(todoHeader);
  todoDiv.appendChild(todoTitle);

  const button = document.createElement("button");
  button.innerText = "X";
  button.className = "todo-detele-btn";
  button.addEventListener("click", deleteToDo);
  div.appendChild(todoDiv);
  div.appendChild(button);

  toDoList.appendChild(div);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
