const cms = {
  title: "Home",
  subPages: [
    { title: "About Us", subPages: [] },
    {
      title: "Products",
      subPages: [
        { title: "Product A", subPages: [] },
        { title: "Product B", subPages: [] },
      ],
    },
    { title: "Contact", subPages: [] },
  ],
};

// To render, you must handle single page vs subpages differently
console.log("Page: Home");
cms.subPages.forEach((page) => {
  console.log("  Page:", page.title);
  page.subPages.forEach((sub) => console.log("    SubPage:", sub.title));
});

/*
Client code must distinguish leaf vs composite.
Hard to support deep nesting of pages.
Adding new page types or subpages requires changing traversal logic everywhere.
*/
