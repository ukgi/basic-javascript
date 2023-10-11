for (const item of [1, 2, 3]) {
  console.log(item);
}

// for...of의 원리
const iterable = [1, 2, 3];
const iterator = iterable[Symbol.iterator]();

for (;;) {
  const res = iterator.next();

  if (res.done) break;

  const item = res.value;
  console.log(item);
}

// 이터러블과 유사배열객체
// 유사배열객체 : 배열처럼 인덱스로 접근이 가능하고 length 프로퍼티를 가지고 있는 객체
// 유사배열이면서 이터러블인 것들 : arguments, NodeList, HTMLCollection
// 주의할 점은 모든 유사배열이 이터러블은 아니다
