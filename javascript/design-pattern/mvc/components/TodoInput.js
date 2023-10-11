import Component from '../core/Component.js';

export default class TodoInput extends Component {
  getTemplate() {
    return `
    <form>
        <input type='text' placeholder='오늘 할일을 입력하세요.'/>
        <button type='submit'>입력</button>
    </form>
    `;
  }

  mounted() {}

  setEvent() {}
}
