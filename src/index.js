import './style.css';
import Todo from './classes/Todo.js';
import todoList from './classes/TodoList.js';
import { renderList } from './modules/utils.js';
import setDraggables from './modules/drag_drop.js';
import setCheckboxes from './modules/check_todo.js';
import { addToList, editTodoItem, deleteTodoItem } from './modules/add_remove.js';
import storage from './modules/storage.js';

const myList = [
  new Todo({
    description: 'Setup linters',
    completed: true,
  }),
  new Todo({
    description: 'Configure Webpack',
    completed: false,
  }),
  new Todo({
    description: 'Update README',
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
addToList(save);
editTodoItem(save);
deleteTodoItem(save);

window.addEventListener('load', () => {
  const initialList = checkStorage(storage, myList);
  initializeList(initialList);
  renderList(initialList);
});