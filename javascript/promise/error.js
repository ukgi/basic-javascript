// try {
//   setTimeout(() => {
//     throw new Error('Error!');
//   }, 1000);
// } catch (err) {
//   console.log('캐치한 에러', err);
// }

// 비동기처리는 콜백함수 내부에서 이루어진다. (비동기함수는 비동기로 동작하는 코드를 포함)
// 비동기처리는 호출함수가 끝난 후에 이루어진다 (반환 ❌, 상위 스코프에 전달❌)
// 해결방법 -> 콜백함수 전달 but, 콜백 헬
// 그래서 도입된 거 Promse -> 비동기처리를 비동기함수 내부에서 할 수 있도록 구현
// resolve -> 비동기 처리가 성공했으면 resolve를 호출해 Promise의 상태를 fufilled로 만듬
// reject -> 비동기 처리가 실패했으면 reject를 호출해 Promise의 상태를 rejected로 만듬
// Promise 객체는 비동기 처리의 상태를 가지고 있는 객체라고 생각하면 된다.

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Error!'));
    }, 1);
  });
}

delay()
  .then(() => {}) // fufilled 상태가 아니므로 처리할 게 없음
  .catch((err) => console.log(err));
