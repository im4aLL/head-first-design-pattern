/*
Imagine you're building a game or UI design tool where you have to create many objects with the same structure (like buttons, enemies, or shapes).

Creating new instances with all the same configuration again and again is inefficient and error-prone.
*/

class Enemy {
  constructor(
    public type: string,
    public health: number,
    public weapon: string,
    public speed: number,
  ) {}
}

// Create a base enemy
const baseEnemy = new Enemy("Orc", 100, "Axe", 10);

// To create a similar enemy, we manually copy all fields:
const anotherEnemy = new Enemy("Orc", 100, "Axe", 10);

/*
We repeat the same constructor arguments over and over.
If the object has many properties, copying them is tedious.
Changing a property in one place doesn’t affect the others.
*/
