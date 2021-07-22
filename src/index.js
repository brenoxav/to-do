import './style.css';
import Todo from './classes/Todo.js';
import todoList from './classes/TodoList.js';
import { createElement, getIndex, renderList } from './modules/utils.js';
import setDraggables from './modules/drag_drop.js';

const list = document.querySelector('.todo-list');

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

function initializeList(myList) {
  myList.forEach((todo) => {
    todoList.addTodo(todo);
  })
}

setDraggables();

window.addEventListener('load', () => {
  initializeList(myList);
  renderList(myList);
});