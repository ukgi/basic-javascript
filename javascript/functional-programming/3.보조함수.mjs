import { filter, map, users } from './2.클로저활용.mjs';

// function findBy(key, list, value) {
//   for (let i = 0, len = list.length; i < len; i++) {
//     if (list[i][key] === value) return list[i];
//   }
// }

// 위의 코드는 key로 value를 얻을 수 있는 객체라면 모두 사용할 수 있다
// 하지만 확장성이 아직 부족하다
// 1. key가 아닌 메서드를 통해 값을 얻는 경우
// 2. 두 가지 이상의 조건이 필요할 때
// 3. 동등비교가 아닌 다른 조건으로 찾을 때

function User(id, name, age) {
  this.getId = () => {
    return id;
  };
  this.getName = () => {
    return name;
  };
  this.getAge = () => {
    return age;
  };
}

export const users2 = [
  new User(1, 'ID', 32),
  new User(2, 'HA', 25),
  new User(3, 'BJ', 32),
  new User(4, 'PJ', 28),
  new User(5, 'JE', 27),
  new User(5, 'JM', 32),
  new User(5, 'HI', 24),
];

export function find(list, predicate) {
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) return list[i];
  }
}

// console.log(find(users2, (user) => user.getAge() === 24).getName());
// console.log(find(users, (user) => user.age === 32 && user.name === 'JM'));
// console.log(find(users, (user) => user.name.indexOf('P') !== -1));

// console.log(
//   map(
//     filter(users2, (u) => u.getAge() > 30),
//     (u) => u.getName()
//   )
// );
