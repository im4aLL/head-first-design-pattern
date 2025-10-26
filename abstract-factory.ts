/*
Imagine a company building UI components for two platforms:

MacOS UI
Windows UI

Each platform must produce related widgets:

Button
Checkbox

We want the app to switch UI themes without changing the business code.
*/

class WindowsButton {
  render() {
    console.log("Render Windows button");
  }
}

class MacButton {
  render() {
    console.log("Render Mac button");
  }
}

class WindowsCheckbox {
  check() {
    console.log("Check Windows checkbox");
  }
}

class MacCheckbox {
  check() {
    console.log("Check Mac checkbox");
  }
}

// Client Code - tightly coupled with concrete classes
function app(os: string) {
  let button;
  let checkbox;

  if (os === "windows") {
    button = new WindowsButton();
    checkbox = new WindowsCheckbox();
  } else if (os === "mac") {
    button = new MacButton();
    checkbox = new MacCheckbox();
  }

  button.render();
  checkbox.check();
}

// Run
app("windows");
app("mac");

// Problems
/*
Why it's bad
- Uses new directly	Client knows concrete classes - violates SOLID
- Conditional logic everywhere	Adding a new platform -> change code in many places
- Risk of mixing product families	Could accidentally use MacButton + WindowsCheckbox
- Hard to scale	More OS types = more messy if/else logic

Example problem:
If you add Linux theme → modify every part that creates UI elements
*/
