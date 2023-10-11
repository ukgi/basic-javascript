export default class TodoModel {
  constructor() {
    this.todoList = [
      {
        id: 0,
        text: 'todo',
      },
    ];
  }

  addTodo(todo) {
    this.todoList = [...this.todoList, todo];
  }

  get reverseTodoList() {
    return this.todoList.reverse();
  }

  deleteTodo(id) {
    this.todoList.splice(
      this.todoList.findIndex((todo) => String(todo.id) === id),
      1
    );
    return this.todoList;
  }
}
