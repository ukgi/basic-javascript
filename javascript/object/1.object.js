console.log(person);

var person = {
  name: '찬욱',
  age: 20,
};

// var로 선언하면 undefined
// 왜냐면 리터럴(표현식)은 런타임 때 코드를 한줄한줄 읽으면서
// 리터럴로 객체를 표현한 부분에서 객체를 할당한다.
// 때문에 할당되기 이전에 person에 접근하면 오류가 난다.

// var는 let, const와 다르게 런타임 이전에 person이 있는지 확인하고
// undefined 상태로 만들어둔다.
// 그렇기 때문에 undefined 접근이 가능한것이다.

console.clear();

let person2 = {
  name: '찬욱',
  sayHello: () => {
    console.log('hello!');
  },
};
person2.sayHello();
// --------------------------------------------------------------------------------------------- //
let obj = {};
let key = 'hello';

obj[key] = () => {
  console.log('hello! world!');
};

obj[key]();

// ------------------------------------------------------------------------------------------------ //
var person3 = {
  'last-name': 'Lee',
  1: 10,
};

console.log(person3['last-name']); // 네이밍규칙에 맞지 않는 것은 대괄호 표기법
console.log(person3[1]); // 키값이 숫자인 경우에도 대괄호표기법
