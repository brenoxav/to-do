const list = document.querySelector('.todo-list');
const listTemplate = document.querySelector('.list-template');

function createElement(todo) {
  const newTodoElement = listTemplate.content.firstElementChild.cloneNode(true);
  newTodoElement.querySelector('.todo-text').value = todo.description;
  newTodoElement.querySelector('.todo-checkbox').checked = todo.completed;
  todo.setElement(newTodoElement);
  return todo;
}

function getIndex(todo) {
  const index = Array.from(list.getElementsByTagName('li')).indexOf(todo.element);
  return index;
}

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function renderList(listData) {
  clearList();
  listData.forEach((todo) => {
    createElement(todo);
    list.appendChild(todo.getElement());
    todo.setIndex(getIndex(todo));
  });
}

export { createElement, getIndex, renderList };