class Page {
  constructor(name, link, children = []) {
    this.name = name;
    this.link = link;
    this.children = Array.isArray(children) ? children : [];
  }

  // Add one or more children to this Page
  addChildren(...newChildren) {
    this.children.push(...newChildren);
    return this; // Return 'this' to allow method chaining
  }

  // Static method to create a Page instance from raw data
  static fromData(name, link, children = []) {
    const childPages = children.map((child) =>
      Page.fromData(child.name, child.link, child.children)
    );
    return new Page(name, link, childPages);
  }
}

// Example usage:
// const pages = [
//   new Page("0005-proj-03", "lessons/0005-proj-03/index.html"),
//   new Page(
//     "0001-layout-design",
//     "lessons/0001-layout-design/index.html"
//   ).addChildren(
//     new Page("./with-container/001.html", "./with-container/001.html")
//   ),
// ];

const pages = [
  Page.fromData("0005-proj-03", "lessons/0005-proj-03/index.html"),

  Page.fromData(
    "0001-layout-design",
    "lessons/0001-layout-design/index.html"
  ).addChildren(
    Page.fromData("./with-container/001.html", "./with-container/001.html"),
    Page.fromData(
      "./with-container-fluid/001.html",
      "./with-container-fluid/001.html"
    ),
    Page.fromData(
      "./with-container-fluid/002.html",
      "./with-container-fluid/002.html"
    ),
    Page.fromData(
      "./with-container-fluid/003.html",
      "./with-container-fluid/003.html"
    ),
    Page.fromData(
      "./with-container-fluid/004.html",
      "./with-container-fluid/004.html"
    )
  ),
];

// Logging the output
// console.log("Page.fromData: ",JSON.stringify(pages, null, 2));

const getLinks = (pages = []) => {
  return pages
    .map(
      ({ name, link, children }) => `
        <li class="list-group-item text-wrap">           
            <a href="${link}">${name}</a> 
            ${
              children && children.length > 0
                ? `
                <ul class="list-group ml-2">
                ${getLinks(children)}
                </ul>
                `
                : ""
            }       
        </li>
        `
    )
    .join(" ");
};

const ulElement = document.getElementById("nav-links-on-home-page");

ulElement.innerHTML += getLinks(pages);
