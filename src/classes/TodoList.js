class TodoList {
  constructor(todosArr = []) {
    this.todos = todosArr;
  }

  findTodo(element) {
    return this.todos.find((todo) => todo.element === element);
  }

  sortList = () => {
    const byIndex = (a, b) => {
      if (a.index > b.index) {
        return 1;
      }
      return -1;
    };
    this.todos.sort((byIndex));
  }

  addTodo(todoObj) {
    this.todos = [...this.todos, todoObj];
  }

  removeTodo(todoObj) {
    this.todos = this.todos.filter((todo) => todo !== todoObj);
    this.sortList();
  }

  removeCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.sortList();
  }

  setTodos(todosArr) {
    this.todos = todosArr;
  }

  getTodos() {
    return this.todos;
  }
}

const todoList = new TodoList();

export { todoList as default };