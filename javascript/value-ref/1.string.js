// 문자열은 유사배열이지만 원시값이므로 값의 변경은 불가능하다.
let str = 'string';
str[0] = 'B';
console.log(str);

str = 'new';
console.log(str);
