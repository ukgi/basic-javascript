class CoffeeMachine {
  _MAX_COFFEE_BEANS = 0;
  static coffeeBeans_Per_Shot;
  _shot = 0;

  constructor(beans) {
    this._MAX_COFFEE_BEANS = beans;
  }

  static makeMachine(beans) {
    return new CoffeeMachine(beans);
  }

  get coffeeBeansAmount() {
    return this._MAX_COFFEE_BEANS;
  }

  set setShot(shot) {
    this._shot = shot;
  }

  set fillCoffeeBeans(beans) {
    if (beans < 0) throw new Error('커피콩의 양은 음수가 될 수 없습니다.');
    this._MAX_COFFEE_BEANS += beans;
  }

  makeCoffee() {}
}

module.exports = CoffeeMachine;
