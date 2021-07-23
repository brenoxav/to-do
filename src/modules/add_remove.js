import Todo from '../classes/Todo.js';
import todoList from '../classes/TodoList.js';
import { renderList } from './utils.js';

const newTodoInput = document.querySelector('.new-todo-input')

function isValidInputField(element) {
  if (element === newTodoInput) {
    return true;
  }
  return false;
}

function isValidTodoText(element) {
  if (element.classList.contains('todo-text')) {
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
    renderList(todoList.getTodos());
  }
}

function addToList(saveCallback) {
  document.addEventListener('keypress', (e) => {
    if (isValidInputField(e.target)) {
      if (e.key === 'Enter') {
        addNewTodo(e.target);
        e.target.value = '';
        saveCallback();
      }
    }
  });
}

function editTodoItem(saveCallback) {
  document.addEventListener('focusout', (e) => {
    if (isValidTodoText(e.target)) {
      const todoObj = todoList.findTodo(e.target.parentElement);
      todoObj.setDescription(e.target.value)
      console.log(todoObj);
      saveCallback();
      newTodoInput.focus();
    }
  });
}

export { addToList, editTodoItem };