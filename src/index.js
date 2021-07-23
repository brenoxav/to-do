import './style.css';
import Todo from './classes/Todo.js';
import todoList from './classes/TodoList.js';
import { renderList } from './modules/utils.js';
import setDraggables from './modules/drag_drop.js';
import setCheckboxes from './modules/check_todo.js';
import storage from './modules/storage.js';

const myList = [
  new Todo({
    description: '1 Setup linters',
    completed: true,
  }),
  new Todo({
    description: '2 Configure Webpack',
    completed: false,
  }),
  new Todo({
    description: '3 Update README',
    completed: false,
  }),
];

function checkStorage(storage, myList) {
  if (storage.hasStorage()) {
    return storage.getStorage();
  }

  return myList;
}

function initializeList(myList) {
  myList.forEach((todo) => {
    todoList.addTodo(todo);
  });
}

const save = () => {
  storage.setStorage(todoList.getTodos());
};

setDraggables(save);
setCheckboxes(save);

window.addEventListener('load', () => {
  const initialList = checkStorage(storage, myList);
  initializeList(initialList);
  renderList(initialList);
});