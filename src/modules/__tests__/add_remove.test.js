/**
 * @jest-environment jsdom
 */

import { expect, test } from '@jest/globals';
import Todo from '../../classes/Todo.js';
import todoList from '../../classes/TodoList.js';
import {
  addNewTodo, deleteTodo, editTodo, deleteChecked,
} from '../add_remove.js';

jest.mock('../utils.js');
jest.mock('../storage.js');

describe('Add and remove todos', () => {
  test('Add a new item to the list', () => {
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

    expect(todoList.getTodos().length).toBe(1);
  });

  test('Edit an item from the list', () => {
    const todo = todoList.getTodos()[0];

    editTodo(todo, 'Updated todo');

    const updatedTodo = todoList.getTodos()[0];

    expect(updatedTodo.getDescription()).toBe('Updated todo');
  });

  test('Delete an item from the list', () => {
    const todo = todoList.getTodos()[0];

    deleteTodo(todo);

    expect(todoList.getTodos().length).toBe(0);
  });

  test('Delete all completed todos', () => {
    const todo1 = new Todo({
      description: 'Update README',
      completed: false,
    });

    const todo2 = new Todo({
      description: 'Setup linters',
      completed: false,
    });

    todoList.addTodo(todo1);
    todoList.addTodo(todo2);

    todo1.toggleCompleted();
    todo2.toggleCompleted();

    deleteChecked(todoList);

    expect(todoList.getTodos().length).toBe(0);
  });
});