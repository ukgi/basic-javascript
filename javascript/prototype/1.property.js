const person = {
  name: 'Lee',
  age: 13,
};

console.log('name' in person);

// 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본갑승로 자동 정의한다
// 프로퍼티의 상태 - value, writable, enumerable, configurable

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log(Object.getOwnPropertyDescriptors(person));

// 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.

const person2 = {
  // 데이터 프로퍼티
  firstName: '찬욱',
  lastName: '박',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티
  // getter와 setter 함수는 접근자 프로퍼티이다. 이들은 데이터 프로퍼티의 값을 읽거나 저장하는 거에만 관여한다.
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
};

person2.fullName = '미란 박';
console.log(person2.fullName);

const person3 = {};

Object.defineProperties(person, {
  firstName: {
    value: '찬욱',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '박',
    writable: true,
    enumerable: true,
    configurable: true,
  },

  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
      [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true,
  },
});
