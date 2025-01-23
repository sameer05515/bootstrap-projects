const mainContent = document.getElementById("sidebar-ul");
mainContent.innerHTML += ["Home", "Dashboard", "Events", "Users", "Settings"]
  .map(
    (value) => `
        <li class="list-group-item text-wrap small">${value}</li>
        `
  )
  .join(" ");

const myCardsRow = document.getElementById("my-cards");
myCardsRow.innerHTML += Array.from(
  { length: 15 },
  (_, i) => `
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 m-2">
          <div class="card">  
            <div class="card-body">
              <h5 class="card-title">Card title: ${i + 1}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>   
        </div>     
        `
).join(" ");
