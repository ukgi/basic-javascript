// this 바인딩은 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.
// 즉, 호출되는 시점이 중요하다.

console.log(this);

function simpleFunc() {
  console.log(this);
}

window.simpleFunc();
var a = 'a';
let b = 'b';

console.log(window.a);
// console.log(window.b);

// 화살표함수는 바인딩된 this의 정보를 기억하고 있다.
// 가장 가까운 상위스코프를 가리키고 기억하고 있다.
class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();
const caller = counter.increase;
// this를 바인딩시킬 객체를 전달하면 된다
// const caller = counter.increase.bind(counter);
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // bob
