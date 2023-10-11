// Object.freeze
// 추가❌, 삭제❌, 쓰기❌, 속성 재정의❌
// 오로지 읽기만 가능하다

const chanuk = { name: '찬욱' };
const dog = { name: '멍멍이', owner: chanuk };
Object.freeze(dog);

dog.name = '왈왈이';
console.log(dog);

// Object.seal
// 값의 수정 ✅, 추가❌, 삭제❌, 속성 재정의❌
// 읽기와 쓰기만 가능하다.
const cat = { ...dog };
Object.seal(cat);
cat.name = '냐옹이';
console.log(cat);

delete cat.owner;
console.log(cat);

// isFrozen, isSealed를 통해 동결, 밀봉의 상태를 확인할 수 있다.
console.log(Object.isFrozen(dog));

// Object.preventExtensions
// 확장이 금지된 객체는 프로퍼티 추가가 금지된다.
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));

tiger.name = '꺼억';
console.log(tiger);

tiger.age = 12;
console.log(tiger);

delete tiger.name;
console.log(tiger);

// 불변 객체
// 위의 메서드들은 얕은 변경 방지로 직속 프로퍼티만 변경이 방지된다.
// 즉, 중첩 객체까지는 영향을 주지 못한다.

const person = {
  name: 'Lee',
  address: { city: 'Seoul' },
};

Object.freeze(person);

console.log(Object.isFrozen(person));
console.log(Object.isFrozen(person.address));

person.address.city = 'Busan';
console.log(person);

// 해결방법
// 객체를 값으로 갖는 모든 프로퍼티에 재귀적으로 Object.freeze 호출
function deepFreeze(target) {
  if (target && typeof target === 'object' && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
  return target;
}
