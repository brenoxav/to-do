import Todo from '../classes/Todo.js';

class Storage {
  static setStorage(todosArr) {
    window.localStorage.setItem('todos', JSON.stringify(todosArr));
  }

  static getStorage() {
    const storedList = JSON.parse(window.localStorage.getItem('todos'));
    const todosArr = storedList.map((todo) => new Todo({
      description: todo.description,
      completed: todo.completed,
    }));
    return todosArr;
  }

  static hasStorage() {
    if (window.localStorage.getItem('todos') !== null && window.localStorage.getItem('todos').length > 0) {
      return true;
    }
    return false;
  }
}

const storage = new Storage();

export { storage as default };