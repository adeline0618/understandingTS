//객체 지향
//객체들끼리 서로 의사소통 하도록 정의하여 프로그래밍

//객체 지향의 4가지 원칙!!!!
//Encapsulation
//Abstraction
//inheritance
//polymorphism

//!절차지향적으로 커피머신 만들기
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  const BEANS_GRAM_PER_SHOT = 7;
  let coffeeBeans: number = 0;
  const makeCoffee = (shots: number): CoffeeCup => {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("Not enough coffee beans");
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  };
  const makeLatte = (shots: number): CoffeeCup => {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("Not enough coffee beans");
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasMilk: true,
    };
  };
  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}

//?? 객체 지향적으로 커피머신 만들기

{class CoffeeMaker {
  static BEANS_GRAM_PER_SHOT_CLASS: number = 7;
  coffeeBeans: number = 0;
  constructor(coffeeBeans:number) {
    this.coffeeBeans=coffeeBeans;
    
  }
  

  makeCoffee(shots: number): CoffeeCup {
    if (this.coffeeBeans < shots * this.BEANS_GRAM_PER_SHOT_CLASS) {
      throw new Error("Not enough coffee beans!");
    }
    this.coffeeBeans -= shots * this.BEANS_GRAM_PER_SHOT_CLASS;
    return{
      shots,
      hasMilk:false;
    }
  }
}
const maker=new CoffeeMaker(32);
}

