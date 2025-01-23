class Page {
  constructor(name, link, children) {
    this.name = name;
    this.link = link;
    this.children = children || [];
  }

  addChildren(...children) {
    this.children = children;
  }

  // Static method to create a Lesson from an object
  static fromData(name, link, children) {
    return new Lesson(name, link, children);
  }
}

const pages = [
  //   { name: "0005-proj-03", link: "lessons/0005-proj-03/index.html" },
  new Page("0005-proj-03", "lessons/0005-proj-03/index.html"),
  new Page(
    "0001-layout-design",
    "lessons/0001-layout-design/index.html"
  ).addChildren(
    new Page("./with-container/001.html", "./with-container/001.html")
  ),
];

console.log(pages)

const getLinks = (pages = []) => {
  return pages
    .map(
      ({ name, link, children }) => `
        <li class="list-group-item text-wrap small">           
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
