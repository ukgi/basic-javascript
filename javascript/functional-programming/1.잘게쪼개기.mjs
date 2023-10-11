const users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 },
];

// 기존의 배열을 바꾸지 않고 새로운 배열로 리턴한다 (사이드이팩트❌)
// 함수가 콜백함수의 결과에 의존하고 있다(다형성 확보->콜백함수만 변경되면 다른 필터링 가능)
function filter(list, predicate) {
  const new_list = [];
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) new_list.push(list[i]);
  }
  return new_list;
}
const users_under_30 = filter(users, (user) => (user.age > 30 ? true : false));
const users_over_30 = filter(users, (user) => (user.age <= 30 ? true : false));

// map의 인자로 변수가 아닌 함수(iteratee)를 넘겨준 이유는 무엇일까❓
// 인자로 값을 이용하면 함수를 사용할 때보다 확장성이 떨어진다
// 왜 ? 다양한 조건에 대응할 수 없기 때문이다
// 만일 key가 아닌 메서드를 통해 값을 얻어야한다면 인자로 변수를 사용하게 되면 사용할 수 없다.(3 참고)
function map(list, iteratee) {
  const new_list = [];
  for (let i = 0, len = list.length; i < len; i++) {
    new_list.push(iteratee(list[i]));
  }
  return new_list;
}

function log_length(value) {
  console.log(value.length);
  return value;
}

console.log(
  log_length(
    map(
      filter(users, (user) => user.age > 30),
      (user) => user.age
    )
  )
);
