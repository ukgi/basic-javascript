// static 메서드로 팩토리 메서드 구현
// static 메서드는 클래스 함수의 메서드가 된다.
// 만일 정적메서드가 아닌 프로토타입메서드라면
// 객체를 생성하기 위해 또 객체를 만들어야하는 번거로움이 있다.

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    return new this("Today's digest", new Date());
  }
}

let article = Article.createTodays();
console.log(article.title);

// 정적메서드와 프로퍼티도 상속이 가능하다.
class Animal {
  static planet = '지구';

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name}가 속도 ${this.speed}로 달립니다.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name}가 숨었습니다!`);
  }
}

let rabbits = [new Rabbit('흰토끼', 10), new Rabbit('검은토끼', 5)];
rabbits.sort(Rabbit.compare);
rabbits[0].run(); // 검은토끼로 정렬

// ❓❓ Object를 상속받는 클래스
class Lion {
  constructor(name) {
    this.name = name;
  }
}

let lion = new Lion('어흥이');
console.log(lion.hasOwnProperty('name'));
console.log(Lion.hasOwnProperty('name'));

class Tiger extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let tiger = new Tiger('크왕이');
console.log(tiger.hasOwnProperty('name'));
console.log(Tiger.hasOwnProperty('name'));
