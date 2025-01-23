const NavBar = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
);

const Card = ({ id }: { id: number }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 m-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title: {id}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-2 sidebar rounded-2">
        <h2>Sidebar</h2>
        <ul id="sidebar-ul" className="list-group">
          <li className="list-group-item text-wrap small">My First Item</li>
          {["Home", "Dashboard", "Events", "Users", "Settings"].map((value, idx) => (
            <li key={`idx_${idx + 1}`} className="list-group-item text-wrap small">
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="col-sm-10 main-content">
        <div id="my-cards" className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 m-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title: 0</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          {Array.from({ length: 20 }, (_, idx) => (
            <Card id={idx + 1} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CosmosLayoutV2 = () => {
  return (
    <div>
      <NavBar />
      <Dashboard />
    </div>
  );
};

export default CosmosLayoutV2;
