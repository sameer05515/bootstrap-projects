class Page {
  constructor(name, link, children = []) {
    this.name = name || "Name Missing!!";
    this.link = link || "";
    this.children = Array.isArray(children) ? children : [];
  }

  // Add one or more children to this Page
  addChildren(...newChildren) {
    this.children.push(...newChildren);
    return this; // Return 'this' to allow method chaining
  }

  // Static method to create a Page instance from raw data
  static fromData(name, link, children = []) {
    const childPages = children.map((child) => Page.fromData(child.name, child.link, child.children));
    return new Page(name, link, childPages);
  }
}

// Example usage:
// const pages = [
//   new Page("0005-proj-03", "lessons/0005-proj-03/index.html"),
//   new Page("0001-layout-design", "lessons/0001-layout-design/index.html").addChildren(
//     new Page("./with-container/001.html", "./with-container/001.html")
//   ),
// ];

const pages = [
  Page.fromData("lessons: import-app-from-different-folder-v1: working example", "").addChildren(
    Page.fromData("index.html", "import-app-from-different-folder-v1/index.html")
  ),

  Page.fromData("lessons: import-app-from-different-folder-v2: working examples", "").addChildren(
    Page.fromData("001.html", "import-app-from-different-folder-v2/001.html"),
    Page.fromData("002.html", "import-app-from-different-folder-v2/002.html"),
    Page.fromData("003.html", "import-app-from-different-folder-v2/003.html"),
    Page.fromData("004.html: not working", "import-app-from-different-folder-v2/004.html"),
    Page.fromData("cosmos-layout-v2.html", "import-app-from-different-folder-v2/cosmos-layout-v2.html")
  ),
];

// Logging the output
// console.log("Page.fromData: ",JSON.stringify(pages, null, 2));

// const getLinks = (pages = []) => {
//   return pages
//     .map(
//       ({ name, link, children }) => `
//         <li class="list-group-item text-wrap">
//             <a href="${link}">${name}</a>
//             ${
//               children && children.length > 0
//                 ? `
//                 <ul class="list-group ml-2">
//                 ${getLinks(children)}
//                 </ul>
//                 `
//                 : ""
//             }
//         </li>
//         `
//     )
//     .join(" ");
// };

// Function to generate a single list item
const createListItem = ({ name, link, children }) => {
  const linkStr = link ? `<a href="${link}">${name}</a> ` : `<b>${name}</b>`;
  const aa = `
  <li class="list-group-item text-wrap">           
    ${linkStr}
    ${children?.length ? createNestedList(children) : ""}
  </li>
`;

  return aa;
};

// Function to generate a nested list
const createNestedList = (children) => `
  <ul class="list-group ml-2">
    ${getLinks(children)}
  </ul>
`;

// Main function to generate links
const getLinks = (pages = []) => pages.map(createListItem).join("");

const ulElement = document.getElementById("nav-links-on-home-page");

ulElement.innerHTML += getLinks(pages);
