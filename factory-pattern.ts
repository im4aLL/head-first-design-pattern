class CheesePizza {
  prepare() {
    console.log("Preparing cheese pizza...");
  }
}

class PepperoniPizza {
  prepare() {
    console.log("Preparing pepperoni pizza...");
  }
}

// Somewhere in your app
function createPizza(orderType: string) {
  if (orderType === "cheese") {
    return new CheesePizza();
  } else if (orderType === "pepperoni") {
    return new PepperoniPizza();
  }
}

const orderType = "pepperoni";
const pizza: any = createPizza(orderType);
pizza.prepare();
