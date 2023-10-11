// ES6 사양에서 정의한 메서드를 사용해야하는 이유
// 1. 의미적으로 맞지 않는 constructor 기능을 제외
// 2. 자신을 바인딩한 객체의 정보를 가지고 있으므로 super 키워드를 사용할 수 있다.

const base = {
  name: 'Lee',
  sayHi() {
    return `Hi ${this.name}`;
  },
};

const derived = {
  __proto__: base,
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  },
};

console.log(derived.sayHi());
