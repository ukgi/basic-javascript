const person = {
  name: '찬욱',
  age: 20,
};

const { name, age } = person;
console.log(name, age);

const { name: n, age: a } = person;
console.log(n, a);

console.clear();

const str = 'Hello';
const { length } = str;
console.log(length);

const todo = {
  title: '개발공부',
  content: '자바스크립트 마스터',
  completed: true,
};
function printTodo({ title, content, completed }) {
  console.log(`${title} ${content} ${completed}`);
}
printTodo(todo);

const user = {
  name: 'Lee',
  address: {
    zipCode: '03531',
    city: 'seoul',
  },
};

const {
  address: { city },
} = user;
console.log(city);

const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
];

const [, { content }] = todos;
console.log(content);

// 활용
function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}
console.log(solution([1, 2, 3, 4, 5], [[2, 4]]));

// 배열의 구조분해할당은 순서가 중요하다. 인덱스를 기준으로 구조분해할당을 하기 때문에.
// 따라서 위의 코드는 구조분해할당을 통해 두 요소의 순서를 바꿔주는 것이다.
