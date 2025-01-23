import './styles.v1.scss';

const listItenArr = () => {
  const arr: { id: string; name: string }[] = [];
  for (let i = 0; i < 20; i++) {
    // arr.push("A simple primary list group item: " + (i + 1));
    // arr.push("A simple secondary list group item: " + (i + 1));
    arr.push(
      { id: `id_${i * 2}`, name: 'primary item: ' + (i + 1) },
      { id: `id_${i * 2 + 1}`, name: 'secondary item: ' + (i + 1) }
    );
  }
  return arr;
};
const IBMColumnLayoutV1 = () => {
  return (
    <div>
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
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 sidebar">
            <ul className="list-group">
              <li className="list-group-item">A simple default list group item</li>
              {listItenArr().map(({ name, id }) => (
                <li key={id} className="list-group-item list-group-item-dark">
                  {name}
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- ./col-3 --> */}

          <div className="col-9 p-4 main-content">
            <h2>Inspections</h2>
            <table className="table myTable420">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- ./col-9 --> */}
        </div>
      </div>
    </div>
  );
};

export default IBMColumnLayoutV1;
