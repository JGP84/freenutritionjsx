import { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebaseconfig";
import { UserContext } from "../UserContext.js";

const Menu = () => {
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);

  const closeSesion = () => {
    auth.signOut();
    setUser(null);
    history.push("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-around p-3">
        <h1>F r e e N u t r i t i o n P l a n n e r . O R G</h1>
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item">
            {user === "admin@admin.com" ? (
              <Link className="nav-link" to="/">
                Home
              </Link>
            ) : (
              <span></span>
            )}
          </li>

          <li className="nav-item">
            {!user ? (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            ) : (
              <span></span>
            )}
          </li>
          <li className="nav-item">
            {user === "admin@admin.com" ? (
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            ) : (
              <span></span>
            )}
          </li>
        </ul>

        {user ? (
          <button onClick={closeSesion} className="btn btn-danger">
            Sign Out
          </button>
        ) : (
          <span></span>
        )}
      </nav>
    </>
  );
};

export default Menu;
