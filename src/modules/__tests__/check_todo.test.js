/**
 * @jest-environment jsdom
 */

import { expect, test } from '@jest/globals';
import todoList from '../../classes/TodoList.js';
import { addNewTodo } from '../add_remove.js';
import { checkTodo } from '../check_todo.js';

jest.mock('../utils.js');
jest.mock('../storage.js');

describe('Check todo item as completed', () => {
  test('Toggle todo complete', () => {
    document.body.innerHTML = `
     <div class="item">
     <input class="new-todo-input" type="text" placeholder="Add new to do...">
     <span class="material-icons btn-icon return-icon">keyboard_return</span>
     </div>
     <ul class="todo-list">
     </ul>
     `;
    const inputField = document.querySelector('.new-todo-input');
    inputField.value = 'Update README';

    addNewTodo(inputField);
    const todo = todoList.getTodos()[0];

    checkTodo(todo);

    expect(todoList.getTodos()[0].isCompleted()).toBeTruthy();
  });
});