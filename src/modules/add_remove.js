import Todo from '../classes/Todo.js';
import todoList from '../classes/TodoList.js';
import { renderList } from './utils.js';

const newTodoInput = document.querySelector('.new-todo-input');

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

function isValidDeleteIcon(element) {
  if (element.classList.contains('btn-delete')) {
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
      todoObj.setDescription(e.target.value);
      saveCallback();
      const todoDeleteBtn = e.target.nextElementSibling;
      setTimeout(() => {
        todoDeleteBtn.classList.add('hidden');
      }, 200);
      // newTodoInput.focus();
    }
  }, true);

  document.addEventListener('focus', (e) => {
    if (isValidTodoText(e.target)) {
      const todoDeleteBtn = e.target.nextElementSibling;
      todoDeleteBtn.classList.remove('hidden');
    }
  }, true);
}

function deleteTodoItem(saveCallback) {
  document.addEventListener('click', (e) => {
    if (isValidDeleteIcon(e.target)) {
      const todoObject = todoList.findTodo(e.target.parentElement);
      todoList.removeTodo(todoObject);
      renderList(todoList.getTodos());
      saveCallback();
    }
  });
}

export { addToList, editTodoItem, deleteTodoItem };