/*
Problem: Text Formatting in a Document Editor

Imagine you are building a rich text editor (like Word or Google Docs). Each character might have:
Font family
Font size
Font color
Bold / Italic / Underline
*/

class Character {
  constructor(
    public char: string,
    public fontFamily: string,
    public fontSize: number,
    public color: string,
    public bold: boolean,
    public italic: boolean,
  ) {}
}

const text: Character[] = [];
const sample = "HELLO WORLD";

for (let i = 0; i < sample.length; i++) {
  text.push(new Character(sample[i], "Arial", 12, "black", false, false));
}

console.log(`Total characters: ${text.length}`);

/*
Problems

Each character stores duplicate font/style information.
Memory usage increases linearly with the number of characters.
Not scalable for large documents (thousands of characters).
*/
