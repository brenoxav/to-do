import './style.css';

const list = document.querySelector('.todo-list');

const myList = [
  {
    description: 'Setup linters',
    completed: false,
    index: 1,
  },
  {
    description: 'Configure Webpack',
    completed: false,
    index: 2,
  },
  {
    description: 'Update README',
    completed: false,
    index: 3,
  },
];

function renderList() {
  myList.forEach((todo) => {
    const todoItem = `
    <li class="todo-item item" data-index="${todo.index}">
      <input class="todo-checkbox" type="checkbox" value="${todo.index}">
      <input class="todo-text" type="text" value="${todo.description}">
      <span class="material-icons btn-icon drag-icon">drag_indicator</span>
    </li>
    `;

    list.innerHTML += todoItem;
  });
}

window.addEventListener('load', renderList);