export default class Component {
  state = [];
  target;
  props = {};

  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.setup();
    this.render();
    this.setEvent();
  }

  setup() {}
  mounted() {}
  getTemplate() {
    return '';
  }

  render() {
    this.target.innerHTML = this.getTemplate();
    this.mounted();
  }

  setEvent() {}

  setState(newState) {
    this.state = newState;
    this.render();
  }
}
