import { useState } from "react";
import "./App.scss";
import "bootstrap/scss/bootstrap.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-fluid">
      <h1>Vite + React+ TS</h1>
      <div className="card-body">
        <button
          className="btn btn-sm btn-success"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
