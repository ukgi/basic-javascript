import Component from '../core/Component.js';
import TodoInput from './TodoInput.js';

export default class App extends Component {
  setup() {
    this.state = [];
  }

  getTemplate() {
    return `
    <section class='todoList' data-component='TodoList'></section>
    <section class='todoInput' data-component='TodoInput'></section>
    <button class='todoReverse' data-component='TodoReverse'>Reverse</button>
    `;
  }

  mounted() {
    const todoInput = this.target.querySelector('[data-component="TodoInput"]');
    const todoList = this.target.querySelector('[data-component="TodoList"]');
    new TodoInput(todoInput);
  }

  setEvent() {}
}
