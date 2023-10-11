const CoffeeMachine = require('./coffeeMachine.js');

class BasicCoffeeMachine extends CoffeeMachine {
  static coffeeBeans_Per_Shot = 10;

  static makeMachine(beans) {
    return new BasicCoffeeMachine(beans);
  }

  makeCoffee(shot) {
    this.setShot = shot;
    if (this._MAX_COFFEE_BEANS - this._shot * BasicCoffeeMachine.coffeeBeans_Per_Shot < 0)
      throw new Error('커피콩이 부족합니다...커피콩을 더 채워주세요.');

    this._MAX_COFFEE_BEANS -= this._shot * BasicCoffeeMachine.coffeeBeans_Per_Shot;
    const coffee = {
      shot: this._shot,
      leftoverBeans: this._MAX_COFFEE_BEANS,
    };
    return coffee;
  }
}

const coffeeMachine = BasicCoffeeMachine.makeMachine(100);
console.log(coffeeMachine.makeCoffee(2));
coffeeMachine.fillCoffeeBeans = 20;
console.log('커피콩 양', coffeeMachine.coffeeBeansAmount);
