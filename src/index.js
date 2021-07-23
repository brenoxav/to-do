import './style.css';
import todoList from './classes/TodoList.js';
import { renderList } from './modules/utils.js';
import setDraggables from './modules/drag_drop.js';
import setCheckboxes from './modules/check_todo.js';
import {
  addToList, editTodoItem, deleteTodoItem, deleteAllChecked,
} from './modules/add_remove.js';
import storage from './modules/storage.js';

const myList = [];

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
deleteAllChecked(save);

window.addEventListener('load', () => {
  const initialList = checkStorage(storage, myList);
  initializeList(initialList);
  renderList(initialList);
});