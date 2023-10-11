// 생성자함수 : 인스턴스를 생성하고 생성된 인스턴스를 초기화

function Circle(radius) {
  console.log(this);

  this.radius = radius;
  this.getDiameter = () => {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);
console.log(circle1);
console.log(circle1.getDiameter());

function foo() {}
const bar = function () {};

const baz = {
  x: function () {},
};

new foo();
new bar();
new baz.x();

const arrow = () => {};
new arrow();

const obj = {
  x() {},
};
new obj.x();
