import { NavLink } from "react-router-dom";

const routesArray = [
  { title: "Home", routeUrl: "/" },
  { title: "Apna Playgound", routeUrl: "/apna-playground" },
].map((r, idx) => ({
  ...r,
  id: `route-${idx + 1}`,
}));

const Home = () => {
  return (
    <div className="container-fluid">
      <div
        style={{
          display: "block",
          justifyItems: "center",
          fontWeight: "bold",
          paddingTop: "4px",
          paddingBottom: "4px",
          width: "100%",
        }}
      >
        {routesArray.map(({ id, title, routeUrl }) => (
          <NavLink key={id} to={routeUrl} style={{ textAlign: "center" }}>
            <div>{title}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
