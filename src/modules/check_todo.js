import todoList from '../classes/TodoList.js';

function isValidCheckbox(element) {
  if (element.classList.contains('todo-checkbox')) {
    return true;
  }
  return false;
}

function checkTodo(todoObj) {
  todoObj.toggleCompleted();
}

function setCheckboxes(saveCallback) {
  document.addEventListener('change', (e) => {
    if (isValidCheckbox(e.target)) {
      const todoObj = todoList.findTodo(e.target.parentElement);
      checkTodo(todoObj);
      const todoText = e.target.nextElementSibling;
      if (todoObj.isCompleted()) {
        todoText.classList.add('checked');
      } else {
        todoText.classList.remove('checked');
      }
      saveCallback();
    }
  });
}

export { checkTodo, setCheckboxes as default };