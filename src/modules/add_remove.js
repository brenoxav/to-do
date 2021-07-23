import Todo from '../classes/Todo.js';
import todoList from '../classes/TodoList.js';
import { renderList } from './utils.js';

function isValidinputField(element) {
  if (element.classList.contains('new-todo-input')) {
    return true;
  }
  return false;
}

function addNewTodo(inputField) {
  if (inputField.value !== '') {
    const newTodo = new Todo({
      description: inputField.value,
      completed: false,
    });
    todoList.addTodo(newTodo);
    inputField.value = '';
    renderList(todoList.getTodos());
  }
}

function addToList(saveCallback) {
  document.addEventListener('keypress', (e) => {
    if (isValidinputField(e.target)) {
      if (e.key === 'Enter') {
        addNewTodo(e.target);
        saveCallback();
      }
    }
  });
}

export { addToList };