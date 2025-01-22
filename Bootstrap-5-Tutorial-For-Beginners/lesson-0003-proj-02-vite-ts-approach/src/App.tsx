import "./App.scss";
import "bootstrap/scss/bootstrap.scss";
import AppRoutes from "./routes/v1";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <div className="container-fluid">
      <AppRoutes/>
    </div>
  );
}

export default App;
