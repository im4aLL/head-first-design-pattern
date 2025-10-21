interface ThemeSwitcherInterface {
  toggleTheme(): void;
}

interface ThemeState {
  toggle(themeSwitcher: ThemeSwitcherInterface): void;
  apply(): void;
}

// Theme states
class LightTheme implements ThemeState {
  toggle(themeSwitcher: ThemeSwitcher): void {
    console.log("Switching to Dark Theme...");
    themeSwitcher.setState(new DarkTheme());
  }

  apply(): void {
    console.log("Light Theme applied");
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
}

class DarkTheme implements ThemeState {
  toggle(themeSwitcher: ThemeSwitcher): void {
    console.log("Switching to Light Theme...");
    themeSwitcher.setState(new LightTheme());
  }

  apply(): void {
    console.log("Dark Theme applied");
    document.body.style.background = "#222";
    document.body.style.color = "white";
  }
}

// Context
class ThemeSwitcher implements ThemeSwitcherInterface {
  private state: ThemeState;

  constructor() {
    this.state = new LightTheme(); // start with light mode
    this.state.apply();
  }

  setState(state: ThemeState) {
    this.state = state;
    this.state.apply();
  }

  toggleTheme() {
    this.state.toggle(this);
  }
}

// Usage
const switcher = new ThemeSwitcher();

switcher.toggleTheme(); // Switching to Dark Theme... Dark Theme applied
switcher.toggleTheme(); // Switching to Light Theme... Light Theme applied
