interface FlyBehavior {
  fly(): void;
}

interface QuackBehavior {
  quack(): void;
}

// Behaviors
// ===========================
class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I'm flying with wings!");
  }
}

class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("I can't fly");
  }
}

class Quack implements QuackBehavior {
  quack(): void {
    console.log("Quack!");
  }
}

class Squeak implements QuackBehavior {
  quack(): void {
    console.log("Squeak!");
  }
}

// duck
// ==========================
abstract class Duck {
  protected flyBehavior: FlyBehavior;
  protected quackBehavior: QuackBehavior;

  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  performFly(): void {
    this.flyBehavior.fly();
  }

  performQuack(): void {
    this.quackBehavior.quack();
  }

  swim(): void {
    console.log("All ducks float, even decoys!");
  }

  setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb;
  }

  setQuackBehavior(qb: QuackBehavior): void {
    this.quackBehavior = qb;
  }

  abstract display(): void;
}

// different types of duck
class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): void {
    console.log("I am a Mallard duck");
  }
}

class RubberDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Squeak());
  }

  display(): void {
    console.log("I am a Rubber duck");
  }
}

// usage
const mallard = new MallardDuck();
mallard.display(); // I am a Mallard duck
mallard.performFly(); // I'm flying with wings!
mallard.performQuack(); // Quack!

const rubber = new RubberDuck();
rubber.display(); // I am a Rubber duck
rubber.performFly(); // I can't fly
rubber.performQuack(); // Squeak!

// Change behavior at runtime
rubber.setFlyBehavior(new FlyWithWings());
rubber.performFly(); // I'm flying with wings!

// benefit
// No duplicated code in subclasses
// Behavior can change at runtime
// Easy to add new behaviors without modifying existing ducks
