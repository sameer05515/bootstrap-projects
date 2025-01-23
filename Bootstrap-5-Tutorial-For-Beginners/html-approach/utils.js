const pages = [
  { name: "0005-proj-03", link: "lessons/0005-proj-03/index.html" },
];

const ulElement = document.getElementById("nav-links-on-home-page");

ulElement.innerHTML +=
  // ["Home", "Dashboard", "Events", "Users", "Settings"]
  pages
    .map(
      ({ name, link }) => `
        <li class="list-group-item text-wrap small">
        <li class="list-group-item">
            
            <a href="${link}">${name}</a>
        </li>
        </li>
        `
    )
    .join(" ");
