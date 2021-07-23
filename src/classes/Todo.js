export default class Todo {
  constructor({
    description = '', completed = false, index = 0, element = null,
  }) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    this.element = element;
  }

  setDescription(description) {
    this.description = description;
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

  isCompleted() {
    return this.completed;
  }

  getElement() {
    return this.element;
  }

  setElement(element) {
    this.element = element;
  }
}