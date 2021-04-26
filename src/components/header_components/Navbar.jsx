import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-around">
      <img
        src="/docs/4.5/assets/brand/bootstrap-solid.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
        loading="lazy"
      ></img>
      <a className="navbar-brand" href="#">
        <h1>FreeNutritionPlanner.org</h1>
      </a>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item"></li>
        <Link className="nav-link" to="/admin">
          Admin
        </Link>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <li className="nav-item"></li>
      </ul>
    </nav>
  );
};

export default Navbar;
