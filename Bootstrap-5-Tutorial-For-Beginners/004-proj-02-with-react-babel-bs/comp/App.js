const NavBar = () => (
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
);

const Card=({id})=>{

  return (
    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 m-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title: {id}</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
  )
}

const Dashboard=()=>(
  <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2 sidebar rounded-2">
          <h2>Sidebar</h2>
          <ul id="sidebar-ul" class="list-group">
            <li class="list-group-item text-wrap small">My First Item</li>
            {["Home", "Dashboard", "Events", "Users", "Settings"].map((value,idx)=>(
              <li key={`idx_${idx+1}`} class="list-group-item text-wrap small">{value}</li>
            ))}
          </ul>
        </div>

        <div class="col-sm-10 main-content">          
          <div id="my-cards" class="row">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 m-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title: 0</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            {
              Array.from({length:20},(_,idx)=>(
                <Card id={idx+1} />
              ))
            }

          </div>
        </div>
      </div>
    </div>
)

const App = () => {
  return (
    <div>
      <NavBar />
      <Dashboard/>
    </div>
  );
};

// const mainContent = document.getElementById("sidebar-ul");
// mainContent.innerHTML += ["Home", "Dashboard", "Events", "Users", "Settings"]
//   .map(
//     (value) => `
//         <li class="list-group-item text-wrap small">${value}</li>
//         `
//   )
//   .join(" ");

// const myCardsRow = document.getElementById("my-cards");
// myCardsRow.innerHTML += Array.from(
//   { length: 15 },
//   (_, i) => `
//         <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 m-2">
//           <div class="card">  
//             <div class="card-body">
//               <h5 class="card-title">Card title: ${i + 1}</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>   
//         </div>     
//         `
// ).join(" ");

export default App;
