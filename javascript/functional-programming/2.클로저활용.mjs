'use strict';

export const users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 },
];

export function filter(list, predicate) {
  const new_list = [];
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) new_list.push(list[i]);
  }
  return new_list;
}

export function map(list, iteratee) {
  const new_list = [];
  for (let i = 0, len = list.length; i < len; i++) {
    new_list.push(iteratee(list[i]));
  }
  return new_list;
}

const ages = map(
  filter(users, (user) => user.age > 30),
  (user) => user.age
);

export function log_length(value) {
  console.log(value.length);
  return value;
}

// ✅ 클로저를 활용
export function bvalue(key) {
  return function (obj) {
    return obj[key];
  };
}

// console.log(
//   log_length(
//     map(
//       filter(users, (user) => user.age > 30),
//       bvalue('age')
//     )
//   )
// );
