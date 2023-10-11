import { bindingMethods } from '../utils/eventUtils.js';

export default class TodoController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.#render();
    bindingMethods(this, 'handle');
  }

  handleAddTodo(todo) {
    this.model.addTodo(todo);
    this.#render();
  }

  handleReverseTodo() {
    this.model.reverseTodoList;
    this.#render();
  }

  handleDeleteTodo(id) {
    this.model.deleteTodo(id);
    this.#render();
  }

  #render() {
    const { todoList } = this.model;
    this.view.displayTodo(todoList);
  }
}
