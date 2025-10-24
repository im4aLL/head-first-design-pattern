class Duck {
  fly(): void {
    console.log("I can fly!");
  }

  quack(): void {
    console.log("Quack!");
  }

  display(): void {
    console.log("I am a generic duck");
  }
}

class MallardDuck extends Duck {
  display(): void {
    console.log("I am a Mallard duck");
  }
}

class RubberDuck extends Duck {
  display(): void {
    console.log("I am a Rubber duck");
  }

  // Problem: Rubber ducks can't fly and squeak instead of quack
  fly(): void {
    console.log("I can't fly");
  }

  quack(): void {
    console.log("Squeak!");
  }
}

/*
Problems here:

Code duplication: Each duck must override fly and quack.
Rigid behavior: If we want to change behavior at runtime (e.g., a toy duck gets a rocket), we'd have to subclass again.
Hard to maintain: Adding new behavior means editing multiple classes.
*/
