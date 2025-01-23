import { NavLink, Route, Routes } from "react-router-dom";
import ApnaPlaygroundBaseV1 from "../ApnaPlayground/v1";
import ApnaPlaygroundBaseV2 from "../ApnaPlayground/v2";
import Home from "../modules/Home";
const AppRoutes = () => {
  return (
    // <div>le le mera lauda</div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apna-playground/v1" element={<ApnaPlaygroundBaseV1 />} />
      <Route path="/apna-playground/v2" element={<ApnaPlaygroundBaseV2 />} />

      {/** ----- NOT FOUND ---------------------- */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const NotFound = () => {
  return (
    <div className="container-fluid bg-danger-subtle min-vh-100 align-content-center">
      <div className="align-middle card rounded-3 bg-warning text-center">
        <div className="card-header">
          <h1>Page Not Found</h1>
        </div>
        <div className="card-body">
          <p className="row">
            <b>
              Oops! The requested route not found.
            </b>
            <span>
            Please connect with administrator. Or you can go to Home to check all
            configured routes
            </span>
          </p>
        </div>
        <div className="card-footer">
          <NavLink className={"btn btn-primary"} to={"/"}>
            Go to Home
          </NavLink>
          {/* <NavLink className={"btn btn-primary"} to={"-1"}>
            Back
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default AppRoutes;
