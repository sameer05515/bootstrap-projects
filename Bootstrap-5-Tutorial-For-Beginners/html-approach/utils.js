class Page {
  constructor(name, link) {
    this.name = name;
    this.link = link;
    this.children = [];
  }

  addChildren(...children) {
    this.children = [...children];
  }
}

const pages = [
  //   { name: "0005-proj-03", link: "lessons/0005-proj-03/index.html" },
  new Page("0005-proj-03", "lessons/0005-proj-03/index.html"),
  new Page("0001-layout-design", "lessons/0001-layout-design/index.html"),
];

const getLinks = (pages = []) => {
  return pages
    .map(
      ({ name, link, children }) => `
        <li class="list-group-item text-wrap small">           
            <a href="${link}">${name}</a> 
            ${
              children && children.length > 0
                ? `
                <ul class="list-group m-5 p-5">
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

// ulElement.innerHTML += pages
//   .map(
//     ({ name, link }) => `
//         <li class="list-group-item text-wrap small">
//             <a href="${link}">${name}</a>
//         </li>
//         `
//   )
//   .join(" ");

ulElement.innerHTML += getLinks(pages);
