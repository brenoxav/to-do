export default class Todo {
  constructor({ description = '', completed = false, index = 0 }) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    this.createElement();
  }

  createElement() {
    this.element = `
    <li class="todo-item item" draggable="true">
      <input class="todo-checkbox" type="checkbox" ${this.completed ? 'checked= "true"' : ''}>
      <input class="todo-text" type="text" value="${this.description}">
      <span class="material-icons btn-icon drag-icon">drag_indicator</span>
    </li>
    `;
  }
}