export default class TodoList {
  constructor(todosArr = []) {
    this.todos = this.updateIndexes(todosArr);
  }

  updateIndexes(todosArr = this.todos) {
    return todosArr.map((todo, index) => {
      todo.index = index;
      return todo;
    });
  }

  updateIndexes(todosArr = this.todos) {
    return todosArr.map((todo, index) => {
      todo.index = index + 1;
      return todo;
    });
  }

  addTodo(todoObj) {
    todoObj.index = this.todos.length;
    this.todos = [...this.todos, todoObj];
    return todoObj;
  }

  getTodos() {
    return this.todos;
  }
}