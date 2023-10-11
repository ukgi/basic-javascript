// 1. 아무때나 (런타임때도) 선언이 가능하다
// 2. 익명으로 선언할 수 있다
// 3. 익명으로 선언한 함수도 함수나 메서드의 인자로 넘길 수 있다.

function f1() {}
let a = typeof f1 === 'function' ? f1 : function () {};

function f2() {
  return function () {};
}

(function (a, b) {
  return a + b;
})(10, 5);

function callAndAdd(a, b) {
  return a() + b();
}

callAndAdd(
  function () {
    return 10;
  },
  function () {
    return 5;
  }
);
