import View from '../core/View.js';

export default class TodoView extends View {
  constructor() {
    super(document.querySelector('main'));
    this.$input = document.querySelector('input');
  }
  addEvent(handlers) {
    this.$newEl.addEventListener('click', this.runDomEvents(handlers), true);
    this.$newEl.addEventListener('submit', this.runDomEvents(handlers), true);
  }

  runDomEvents({ handleAddTodo, handleReverseTodo, handleDeleteTodo }) {
    return (e) => {
      if (e.type === 'submit') {
        const $lastElement = this.$newEl.querySelector('li:last-child');
        e.preventDefault();
        if ($lastElement === null) {
          const newTodo = {
            id: 0,
            text: e.target[0].value,
          };
          handleAddTodo(newTodo);
        } else {
          const newTodoId = Number($lastElement.dataset.id) + 1;
          const newTodo = {
            id: newTodoId,
            text: e.target[0].value,
          };
          handleAddTodo(newTodo);
        }
        this.$input.value = '';
        this.$input.focus();
      }

      if (e.type === 'click' && e.target.classList.contains('reverse_button')) {
        handleReverseTodo();
      }

      if (e.type === 'click' && e.target.classList.contains('deleteBtn')) {
        handleDeleteTodo(e.target.dataset.id);
      }
    };
  }
}
