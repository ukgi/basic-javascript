import { find } from './3.보조함수.mjs';

const findIndex = (list, predicate) => {
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) return i;
  }
  return -1;
};

// 보조함수에 더 많은 인자를 전달하면 더 다양한 로직을 만들 수 있다.
const filter = function (list, predicate) {
  const new_list = [];
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i], i, list)) new_list.push(list[i]);
  }
  return new_list;
};

console.log(filter([1, 2, 3, 4], (val, i) => i > 1));

const identity = (v) => v; // truthy인 값을 반환

const not = (v) => !v; // falsy값을 반환

const beq = (a) => {
  return function (b) {
    return a === b;
  };
};

const some = (list) => {
  return !!find(list, identity);
};

const every = (list) => {
  return beq(-1)(findIndex(list, not));
};

console.log(some([0, null, 2])); // falsy인 값은 분리된다
console.log(every([{}, [], true, 2])); // 모든값이 true여야된다.

// every는 filter를 사용했기 때문에 항상 루프를 끝까지 돌게된다.
// 해결책 : falsy를 만나면 루프문을 종료하고 해당 요소의 인덱스가 -1아니면 리스트에 falsy값이 존재한다는 거니까 every를 만족하지 않게된다
