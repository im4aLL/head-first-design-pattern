abstract class Beverage {
  description: string = "Unknown Beverage";

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }

  cost(): number {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  cost(): number {
    return 0.89;
  }
}

abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}

class Milk extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Milk";
  }

  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}

class Mocha extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Mocha";
  }

  cost(): number {
    return this.beverage.cost() + 0.2;
  }
}

class Whip extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Whip";
  }

  cost(): number {
    return this.beverage.cost() + 0.15;
  }
}

let beverage: Beverage = new Espresso();
console.log(`${beverage.getDescription()} $${beverage.cost()}`);

beverage = new Milk(beverage);
beverage = new Mocha(beverage);
beverage = new Whip(beverage);

console.log(`${beverage.getDescription()} $${beverage.cost()}`);
