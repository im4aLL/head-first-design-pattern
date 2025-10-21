// Component interface
interface PageComponent {
  render(indent?: string): void;
}

// Leaf page
class Page implements PageComponent {
  private title: string;

  constructor(title: string) {
    this.title = title;
  }

  render(indent: string = "") {
    console.log(`${indent}Page: ${this.title}`);
  }
}

// Composite page/section
class PageSection implements PageComponent {
  private subPages: PageComponent[] = [];
  private title: string;

  constructor(title: string) {
    this.title = title;
  }

  add(page: PageComponent) {
    this.subPages.push(page);
  }

  render(indent: string = "") {
    console.log(`${indent}Section: ${this.title}`);
    this.subPages.forEach((page) => page.render(indent + "  "));
  }
}

// Client code
const homePage = new PageSection("Home");

const aboutPage = new Page("About Us");
const contactPage = new Page("Contact");

const productsSection = new PageSection("Products");
productsSection.add(new Page("Product A"));
productsSection.add(new Page("Product B"));

homePage.add(aboutPage);
homePage.add(productsSection);
homePage.add(contactPage);

// Render entire CMS page hierarchy
homePage.render();
