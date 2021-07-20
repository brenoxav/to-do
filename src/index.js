import './style.css';
import Todo from './classes/Todo.js';
import TodoList from './classes/TodoList.js';

const list = document.querySelector('.todo-list');

const myList = new TodoList([
  new Todo({
    description: 'Setup linters',
    completed: true,
    index: 1,
  }),
  new Todo({
    description: 'Configure Webpack',
    completed: false,
    index: 2,
  }),
  new Todo({
    description: 'Update README',
    completed: false,
    index: 3,
  }),
]);

function renderList() {
  myList.getTodos().forEach((todo) => {
    list.innerHTML += todo.element;
  });
}

window.addEventListener('load', renderList);
window.addEventListener('click', renderList);