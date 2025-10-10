// 1. Base beverage class
class Beverage {
  description: string = "Unknown Beverage";

  getDescription(): string {
    return this.description;
  }

  cost(): number {
    return 0;
  }
}

// 2. Specific drink types
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

// 3. Subclasses for every combination
class HouseBlendWithMilk extends HouseBlend {
  cost(): number {
    return super.cost() + 0.1;
  }

  getDescription(): string {
    return super.getDescription() + ", Milk";
  }
}

class EspressoWithMocha extends Espresso {
  cost(): number {
    return super.cost() + 0.2;
  }

  getDescription(): string {
    return super.getDescription() + ", Mocha";
  }
}

class EspressoWithMochaAndWhip extends Espresso {
  cost(): number {
    return super.cost() + 0.2 + 0.15;
  }

  getDescription(): string {
    return super.getDescription() + ", Mocha, Whip";
  }
}

// 4. Usage
const drink1 = new HouseBlendWithMilk();
console.log(`${drink1.getDescription()} $${drink1.cost()}`);

const drink2 = new EspressoWithMochaAndWhip();
console.log(`${drink2.getDescription()} $${drink2.cost()}`);

/*
This approach works, but quickly becomes unmanageable.

If you have:

4 base drinks
5 condiments (Milk, Mocha, Whip, Soy, Caramel)

You'd need 4 × 2⁵ = 128 subclasses
(EspressoWithMilkAndMochaAndWhipAndSoy, etc.)

That's the class explosion problem and it violates the Open-Closed Principle (every new topping forces you to modify or add subclasses).
*/
