// 1. 숫자/문자열 배열에서 중복 제거하기
const values = [3, 1, 3, 5, 2, 4, 4, 4];
const uniqueValues = [...new Set(values)];

// 2. 간단한 검색
let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' },
  { id: 97, name: 'oLiver', age: 28, group: 'admin' },
];

// name에 oli가 들어간 사람을 찾을때
let res = users.filter((info) => /oli/gi.test(info.name));
console.log(res);

// 3. 중복배열 펼치기
let nested = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let flat = nested.flat(2);
console.log(flat);

console.clear();

// 4. 특정 키의 빈도를 포함하는 객체를 만들기
let users2 = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' },
];

// 나이의 빈도수를 출력하는 함수를 만들어보자
// reduce의 목적 : 배열 데이터를 갖고 특정 값을 추려내 한 차원 낮은 데이터로 원본 배열 데이터를 축약한다

function printOptionFrequency(users, option) {
  return users.reduce((acc, user) => ({ ...acc, [user[option]]: (acc[user[option]] || 0) + 1 }), {});
}

console.log(printOptionFrequency(users2, 'id'));
console.clear();

// user의 id가 key로 작용하는 객체생성
let uTable = users2.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
console.log(uTable);

// 5. 배열 안의 각각의 item에서 특정 키로 유일한 값들 뽑아내기
let listOfUserGroups = [...new Set(users2.map((user) => user.group))];
console.log(listOfUserGroups);
console.clear();

// 6. key-value 역전
let cities = {
  Lyon: 'France',
  Berlin: 'Germany',
  Paris: 'France',
};

let countries = Object.keys(cities).reduce((acc, k) => {
  let country = cities[k];
  acc[country] = [...(acc[country] || []), k];
  return acc;
}, {});

console.log(countries);

// countries is
// {
//   France: ["Lyon", "Paris"],
//   Germany: ["Berlin"]
// }

// 7. 객체를 쿼리스트링으로 인코딩하기
let params = { lat: 45, lng: 6, alt: 1000 };
let queryString = Object.entries(params)
  .map((p) => String(p[0]) + '=' + String(p[1]))
  .join('&');
console.log(queryString);
// queryString is "lat=45&lng=6&alt=1000"

// 8. 명시된 키와 함께 읽기 가능한 string으로 유저 테이블 출력
let users3 = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' },
];

let it = users3.map((user) => `\n${user.id} ${user.age} ${user.group}`).join('');

console.log(it);

// it returns:
// "
// 11 23 editor
// 47 28 admin
// 85 34 editor
// 97 28 admin"
