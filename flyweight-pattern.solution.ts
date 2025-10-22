// Separate similar / essential state (shared: font/style).

/** --- Flyweight --- */
class CharacterStyle {
  constructor(
    public fontFamily: string,
    public fontSize: number,
    public color: string,
    public bold: boolean,
    public italic: boolean,
  ) {}

  render(char: string, position: number) {
    console.log(
      `Rendering '${char}' at position ${position} with ${this.fontFamily}, size ${this.fontSize}, color ${this.color}, bold=${this.bold}, italic=${this.italic}`,
    );
  }
}

/** --- Flyweight Factory --- */
class CharacterStyleFactory {
  private static styles: Map<string, CharacterStyle> = new Map();

  static getStyle(
    fontFamily: string,
    fontSize: number,
    color: string,
    bold: boolean,
    italic: boolean,
  ): CharacterStyle {
    const key = `${fontFamily}-${fontSize}-${color}-${bold}-${italic}`;
    if (!this.styles.has(key)) {
      this.styles.set(
        key,
        new CharacterStyle(fontFamily, fontSize, color, bold, italic),
      );
    }
    return this.styles.get(key)!;
  }
}

/** --- Context: Individual Character --- */
class Character {
  constructor(
    public char: string,
    public style: CharacterStyle,
    public position: number,
  ) {}
  draw() {
    this.style.render(this.char, this.position);
  }
}

/** --- Usage --- */
const text: Character[] = [];
const sample = "HELLO WORLD";

for (let i = 0; i < sample.length; i++) {
  const style = CharacterStyleFactory.getStyle(
    "Arial",
    12,
    "black",
    false,
    false,
  );
  text.push(new Character(sample[i], style, i));
}

// Draw first 5 characters
text.slice(0, 5).forEach((c) => c.draw());

/*
Only one CharacterStyle per unique style is created.
Memory usage drops drastically when many characters share the same style.
Scales efficiently to thousands of characters.
Easy to add new styles without touching existing character objects.
*/
