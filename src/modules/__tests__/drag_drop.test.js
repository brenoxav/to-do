import { expect, test } from '@jest/globals';
import Todo from '../../classes/Todo.js';
import todoList from '../../classes/TodoList.js';
import { dropHandler } from '../drag_drop.js';
import { renderList } from '../utils.js';

jest.mock('../utils.js');
jest.mock('../storage.js');

describe('Reorder todos on drag', () => {
  test('Sort indexes after drag and drop', () => {
    const todo1 = new Todo({
      description: 'Update README',
      completed: false,
    });

    const todo2 = new Todo({
      description: 'Setup linters',
      completed: false,
    });

    todoList.addTodo(todo1); //Index 0
    todoList.addTodo(todo2); //Index 1

    renderList(todoList.getTodos());

    dropHandler(todo1, todo2); //Swap indexes

    expect(todoList.getTodos()[0]).toBe(todo2);
  });
});