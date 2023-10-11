export default class View {
  constructor(target) {
    this.$newEl = target.cloneNode(true);
    this.$newEl.innerHTML = this.getTemplate();
    target.replaceWith(this.$newEl);
  }

  getTemplate() {
    return `
    <ul></ul>
    <form>
      <input type='text' />
      <button type='submit' class="add_button">Add</button>
    </form>
    <button class="reverse_button">Reverse</button>`;
  }

  displayTodo(todoList) {
    const ul = this.$newEl.querySelector('ul');
    ul.innerHTML = `
    ${todoList
      .map(
        (todo) =>
          `<li data-id='${todo.id}'><p>${todo.text}</p><button data-id='${todo.id}' class='deleteBtn'>삭제</button></li>`
      )
      .join('')}
    `;
  }

  addEvent() {}
  runDomEvents() {}
}
