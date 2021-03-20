import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebaseconfig";


const Menu = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);

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
    history.push("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
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
            {!user ? (
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
            Sign out
          </button>
        ) : (
          <span></span>
        )}
      </nav>
    </>
  );
};

export default Menu;
