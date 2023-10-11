import { filter, map, users } from './2.클로저활용.mjs';
import { find } from './3.보조함수.mjs';

function bmatch1(key, val) {
  return function (obj) {
    return obj[key] === val;
  };
}

console.log(find(users, bmatch1('id', 1)));
console.log(find(users, bmatch1('name', 'HI')));
console.log(find(users, bmatch1('age', 27)));

// 고차함수가 보조함수에게 결과에 대한 역할을 위임했기때문에
// bmatch라는 함수를 어느곳에서도 사용가능하다.
console.log(filter(users, bmatch1('age', 32)));
console.log(map(users, bmatch1('age', 32)));

console.clear();

function object(key, val) {
  const obj = {};
  obj[key] = val;
  return obj;
}

function match(obj, obj2) {
  for (let key in obj2) {
    if (obj[key] !== obj2[key]) return false;
  }
  return true;
}

function bmatch(obj2, val) {
  if (arguments.length == 2) obj2 = object(obj2, val);
  return function (obj) {
    return match(obj, obj2);
  };
}

// 위의 코드와 다르게 {key:value} 형태의 방식도 사용가능하다.
console.log(match(find(users, bmatch('id', 3)), find(users, bmatch('name', 'BJ'))));
console.log(match(find(users, bmatch({ name: 'JM', age: 32 }))));

function findIndex(list, predicate) {
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) return i;
  }
  return -1;
}

console.log(findIndex(users, bmatch({ name: 'JM', age: 32 })));
console.log(findIndex(users, bmatch({ age: 36 })));
