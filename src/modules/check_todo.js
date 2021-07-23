import todoList from '../classes/TodoList.js';

function isValidCheckbox(element) {
  if (element.classList.contains('todo-checkbox')) {
    return true;
  }
  return false;
}

export default function setCheckboxes(saveCallback) {
  document.addEventListener('change', (e) => {
    if (isValidCheckbox(e.target)) {
      const todoObj = todoList.findTodo(e.target.parentElement);
      todoObj.toggleCompleted();
      saveCallback();
    }
  });
}