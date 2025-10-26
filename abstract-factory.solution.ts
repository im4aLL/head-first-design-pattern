// Abstract Products
interface Button {
  render(): void;
}
interface Checkbox {
  check(): void;
}

// Concrete Products - Windows
class WindowsButton implements Button {
  render() {
    console.log("Render Windows button");
  }
}
class WindowsCheckbox implements Checkbox {
  check() {
    console.log("Check Windows checkbox");
  }
}

// Concrete Products - Mac
class MacButton implements Button {
  render() {
    console.log("Render Mac button");
  }
}
class MacCheckbox implements Checkbox {
  check() {
    console.log("Check Mac checkbox");
  }
}

// Abstract Factory
interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Concrete Factories
class WindowsFactory implements UIFactory {
  createButton() {
    return new WindowsButton();
  }
  createCheckbox() {
    return new WindowsCheckbox();
  }
}

class MacFactory implements UIFactory {
  createButton() {
    return new MacButton();
  }
  createCheckbox() {
    return new MacCheckbox();
  }
}

// Client Code
function app(factory: UIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render();
  checkbox.check();
}

// Swap theme by switching factory!
app(new WindowsFactory());
app(new MacFactory());

/*
Key Benefits
- Swap entire product families easily
- Keeps code independent of concrete classes
- Enforces product compatibility (e.g., Windows button + Windows checkbox)

Drawbacks
- More classes → increased complexity
- Harder to add new product types (e.g., scrollbars)
*/
