// Prototype interface
interface Prototype {
  clone(): Prototype;
}

// Concrete class
class Enemy implements Prototype {
  public type: string;
  public health: number;
  public weapon: string;
  public speed: number;

  constructor(type: string, health: number, weapon: string, speed: number) {
    this.type = type;
    this.health = health;
    this.weapon = weapon;
    this.speed = speed;
  }

  clone(): Enemy {
    // Create a copy of this object
    return new Enemy(this.type, this.health, this.weapon, this.speed);
  }
}

// Usage
const baseOrc = new Enemy("Orc", 100, "Axe", 10);

const orc1 = baseOrc.clone();
orc1.weapon = "Sword"; // slightly modify the clone

const orc2 = baseOrc.clone();
orc2.health = 80;

console.log(baseOrc);
console.log(orc1);
console.log(orc2);

/*
Avoids expensive object creation - just clone existing templates.
Simplifies configuration - clone and tweak instead of rebuilding.
Encourages reusability - you can maintain a "prototype registry" for predefined templates.
*/
