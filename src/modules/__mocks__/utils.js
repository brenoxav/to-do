function createElement(todo) {
  const newTodo = `
    <li class="todo-item item" draggable="true">
      <input class="todo-checkbox" type="checkbox">
      <input class="todo-text" type="text" value="${todo.description}">
      <span class="material-icons btn-icon btn-delete hidden">delete</span>
      <span class="material-icons btn-icon drag-icon">drag_indicator</span>
    </li>
  `;
  todo.setElement(newTodo);
  return newTodo;
}

function renderList(listData) {
  listData.forEach((todo) => {
    createElement(todo);
  });
}

export { createElement, renderList };