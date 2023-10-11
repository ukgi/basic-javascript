// function Person(name) {
//   this.name = name;
// }

// // prototype으로 메서드를 지정할 때는 화살표 함수를 자제하자.
// Person.prototype.printName = function () {
//   console.log(this.name);
// };

// Person.sayHello = function () {
//   console.log('hello~!');
// };

// const person = new Person('찬욱');
// person.printName();
// Person.sayHello();

// 표현방식만 클래스로 바뀐것이지 내부 동작은 프로토타입과 똑같다.

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi! ${this.name}`);
  }

  static sayHello() {
    console.log('SAY HELLO✌');
  }
}

const person = new Person('찬욱');
person.sayHi();
Person.sayHello();

// 클래스 인스턴스 생성과정
// 1. 인스턴스 생성과 this 바인딩
// 2. constructor 실행과 인스턴스 초기화
// 3. this(인스턴스) 반환

// 상속
class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() {
    return 'eat';
  }

  move() {
    return 'move';
  }
}

class Bird extends Animal {
  fly() {
    return '새가 난다';
  }
}

const bird = new Bird(20, 30);
console.log(bird.age);
console.log(bird.weight);
console.log(bird.fly());
console.log(bird.move());
console.log(bird.eat());

// super 키워드
// - super를 호출하면 슈퍼 클래스의 constructor가 호출된다.
// - super를 참조하면 슈퍼클래스의 메서드를 호출할 수 있다.

class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Derived extends Base {
  constructor(a, b, c) {
    super(a, b);
    this.c = c;
  }
}

// 상속 클래스의 인스턴스 생성 과정
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `width = ${this.width}, height = ${this.height}`;
  }
}

class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  toString() {
    return super.toString() + `, color  = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(10, 20, 'red');
