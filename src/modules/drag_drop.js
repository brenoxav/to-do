import todoList from '../classes/TodoList.js';
import { renderList } from './utils.js';

let draggedObject = null;

function isValidDragElement(element) {
  if (element.draggable) {
    return true;
  }
  return false;
}

export default function setDraggables(saveCallback) {
  document.addEventListener('dragstart', (e) => {
    if (isValidDragElement(e.target)) {
      draggedObject = todoList.findTodo(e.target);
      e.target.classList.add('dragged');
    }
  });

  document.addEventListener('dragend', (e) => {
    if (isValidDragElement(e.target)) {
      e.target.classList.remove('dragged');
    }
  });

  document.addEventListener('dragenter', (e) => {
    if (isValidDragElement(e.target) && !e.target.classList.contains('dragged')) {
      e.target.classList.add('target');
    }
  });

  document.addEventListener('dragleave', (e) => {
    if (isValidDragElement(e.target)) {
      e.target.classList.remove('target');
    }
  });

  document.addEventListener('dragover', (e) => {
    if (isValidDragElement(e.target)) {
      e.preventDefault();
    }
  });

  document.addEventListener('drop', (e) => {
    if (isValidDragElement(e.target) && e.target.classList.contains('target')) {
      e.preventDefault();
      const targetObject = todoList.findTodo(e.target);
      const temp = draggedObject.index;
      draggedObject.index = targetObject.index;
      targetObject.index = temp;
      todoList.sortList();
      renderList(todoList.getTodos());
      saveCallback();
      e.target.classList.remove('target');
    }
  });
}