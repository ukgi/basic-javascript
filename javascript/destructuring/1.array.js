// 우항을 인덱스를 기준으로 좌항의 변수에 값을 할당한다.
const arr = [1, 2, 3];
const [one, two, three] = arr;
console.log(one, two, three);

const [a, b] = [1, 2, 3];
console.log(a, b);

const [e, f = 3, g = 10] = [1, 2];
console.log(e, f, g);

const [x, ...y] = [1, 2, 3];
console.log(x, y);
