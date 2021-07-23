import Todo from '../classes/Todo.js';

class Storage {
  setStorage(todosArr) {// eslint-disable-line
    window.localStorage.setItem('todos', JSON.stringify(todosArr));
  }

  getStorage() {// eslint-disable-line
    const storedList = JSON.parse(window.localStorage.getItem('todos'));
    const todosArr = storedList.map((todo) => new Todo({
      description: todo.description,
      completed: todo.completed,
    }));
    return todosArr;
  }

  hasStorage() {// eslint-disable-line
    if (window.localStorage.getItem('todos') !== null && window.localStorage.getItem('todos').length > 0) {
      return true;
    }
    return false;
  }
}

const storage = new Storage();

export { storage as default };