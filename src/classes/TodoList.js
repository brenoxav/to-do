class TodoList {
  constructor(todosArr = []) {
    this.todos = todosArr;
  }
  
  findTodo(element){
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
    console.log(this.todos);
  }


  addTodo(todoObj) {
    this.todos = [...this.todos, todoObj];
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
