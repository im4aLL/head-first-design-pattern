// Website theme switcher

class ThemeSwitcher {
  private isDark = false;

  toggleTheme() {
    if (this.isDark) {
      console.log("Switching to Light Theme");
      this.isDark = false;
    } else {
      console.log("Switching to Dark Theme");
      this.isDark = true;
    }
  }
}

/*
Well it works for two themes!

What about more themes?
"Auto" theme (changes based on system time)
"High Contrast" mode
You'll end up writing many if/else blocks - messy and hard to maintain.
*/
