/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { addToList, editTodoItem, deleteTodoItem, deleteAllChecked } from "../add_remove";

test('Add a new item to the list', () => {
  document.body.innerHTML = `
  <div class="item">
    <input class="new-todo-input" type="text" value="Update README">
  </div>
  <ul class="todo-list">
  </ul>
  `
  addToList(()=> {});

  const newItem = document.querySelector('.new-todo-input');

  console.log(document.querySelector('.todo-text'));
  
  expect(newItem.value).toBe('Update README');

});