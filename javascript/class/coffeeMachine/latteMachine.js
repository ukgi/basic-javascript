const CoffeeMachine = require('./coffeeMachine');

class LatteMachine extends CoffeeMachine {
  static coffeeBeans_Per_Shot = 5;
  #milk;

  static makeMachine(beans) {
    return new LatteMachine(beans);
  }

  set setMilk(milk) {
    this.#milk = milk;
  }

  makeCoffee(shot, milk = true) {
    this.setShot = shot;
    this.setMilk = milk;
    if (this._MAX_COFFEE_BEANS - this._shot * LatteMachine.coffeeBeans_Per_Shot < 0)
      throw new Error('커피콩이 부족합니다...커피콩을 더 채워주세요.');

    this._MAX_COFFEE_BEANS -= this._shot * LatteMachine.coffeeBeans_Per_Shot;
    const coffee = {
      shot: this._shot,
      milk: this.#milk,
      leftoverBeans: this._MAX_COFFEE_BEANS,
    };
    return coffee;
  }
}

const latteMachine = LatteMachine.makeMachine(100);
console.log(latteMachine.makeCoffee(2, true));
latteMachine.fillCoffeeBeans = 20;
console.log(latteMachine.coffeeBeansAmount);
