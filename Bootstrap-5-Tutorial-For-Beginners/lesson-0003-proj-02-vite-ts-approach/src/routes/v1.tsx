import { Route, Routes } from "react-router-dom";
import ApnaPlaygroundBaseV1 from "../ApnaPlayground/v1";
import Home from "../modules/Home";
const AppRoutes = () => {
  return (
    // <div>le le mera lauda</div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apna-playground" element={<ApnaPlaygroundBaseV1 />} />

      {/** ----- NOT FOUND ---------------------- */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Oops! Page not found.</p>
    </div>
  );
};

export default AppRoutes;
