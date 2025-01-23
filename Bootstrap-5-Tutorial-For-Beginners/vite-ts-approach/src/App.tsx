import "bootstrap/scss/bootstrap.scss";
import "./App.scss";
import AppRoutes from "./routes/v1";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid min-vh-100 overflow-auto">
      <AppRoutes />
    </div>
  );
}

export default App;
