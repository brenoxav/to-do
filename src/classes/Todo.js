export default class Todo {
  constructor({ description = '', completed = false, index = 0, element = null }) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    this.element = element;
  }

  setDescription(description) {
    this.description = description
    const todoDescription = this.element.querySelector('.todo-text');
    todoDescription.value = this.description;
  }

  getDescription() {
    return this.description;
  }

  setIndex(index) {
    this.index = index;
  }

  getIndex() {
    return this.index;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  getElement() {
    return this.element;
  }

  setElement(element) {
    this.element = element;
  }
}