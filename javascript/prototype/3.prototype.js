// 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.

// 인스턴스 레벨의 함수
// 프로토타입 레벨의 함수
// 생성자 함수가 생성하는 객체에 공통적으로 가져야되는 메서드나 프로퍼티가 있다면
// 인스턴스 레벨에서 생성하면 객체를 생성할 때마다 중복되서 생성된다 -> 메모리에 별로 안좋아
// 이럴때는 프로토타입 레벨에서 생성하면 된다.

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1);
console.log(circle2);

console.log(circle1.getArea());

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의하면(오버라이딩)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다
circle1.getArea = function () {
  return '원의 넓이를 알려줍니다';
};

console.log(circle1.getArea());
console.log(circle2.getArea());

// 정적 레벨
// 생성자 함수 자체에 내장되어있다.
Circle.hello = () => {
  console.log('Hello!');
};
Circle.hello();
Circle.MAX_RADIUS = 200;
