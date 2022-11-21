import { v4 } from 'uuid';

const input = document.querySelector('.input');
const buttonAdd = document.querySelector('.buttonAdd');
const form = document.querySelector('.form');
const taskList = document.querySelector('.taskList');
const deleteButton = document.querySelector('.delete');

const arrayTask = [];
let items = [];

form.addEventListener('submit', render);

function render(event) {
  event.preventDefault();
  const addTask = form.elements.task.value;
  arrayTask.push(addTask);

  items = arrayTask.map(
    task =>
      `<li class='listItem' id=${v4()}><input type='checkbox'></input>${task}<button type='button' class='delete'>delete</button></li>`
  );

  taskList.innerHTML = items.join('');
  form.reset();
}

taskList.addEventListener('click', deleteItem);

function deleteItem(e) {
  if (e.target.getAttribute('class') === 'delete') {
    taskList.innerHTML = '';
    const id = e.target.parentNode.getAttribute('id');
    const indexDelete = items.findIndex(item => item.includes(id));
    arrayTask.splice(indexDelete, 1);

    items = arrayTask.map(
      task =>
        `<li class='listItem' id=${v4()}><input type='checkbox'></input>${task}<button type='button' class='delete'>delete</button></li>`
    );

    taskList.innerHTML = items.join('');
  }
}
