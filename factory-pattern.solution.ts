interface Pizza {
  prepare(): void;
}

class CheesePizza implements Pizza {
  prepare() {
    console.log("Preparing cheese pizza...");
  }
}

class PepperoniPizza implements Pizza {
  prepare() {
    console.log("Preparing pepperoni pizza...");
  }
}

// Factory class
class PizzaFactory {
  static createPizza(type: string): Pizza {
    if (type === "cheese") {
      return new CheesePizza();
    } else if (type === "pepperoni") {
      return new PepperoniPizza();
    } else {
      throw new Error("Unknown pizza type!");
    }
  }
}

const orderType = "pepperoni";
const pizza = PizzaFactory.createPizza(orderType);
pizza.prepare();
