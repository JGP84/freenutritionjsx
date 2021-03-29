import { useState } from "react";
import { auth } from "../authentication-firebase/firebaseconfig";
import { useHistory } from "react-router-dom";
import Menu from "../authentication-firebase/Menu";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msgerror, setMsgError] = useState(null);

  const registerUser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((r) => {
        history.push("/");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          setMsgError("bad email format");
        }
        if (err.code === "auth/weak-password") {
          setMsgError("password must be 6 characters or more");
        }
      });
  };

  const loginUser = () => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((r) => {
        history.push("/");
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          setMsgError("bad email format");
        }
      });
  };

  return (
    <>
    <Menu />
    {/* Test new login */}
    {/* <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form> */}
    {/* end new login */}


      <div className="container text-center mt-5">
        <h1>Welcome to Free Nutrition Planner . O R G</h1>
        <h2>Please register or log in to access the application </h2>
      </div>

      <div className="row mt-5">
        <div className="col"> </div>
        <div className="col">
          <form onSubmit={registerUser} className="form-group">
          <label>Email address</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              placeholder="Enter email"
              type="text"
            />
            <label>Password</label>
            <input
              onChange={(e) => {
                setPass(e.target.value);
              }}
              className="form-control"
              placeholder="Enter password"
              type="password"
            />
            <input
              className="btn btn-dark btn-block mt-4"
              value="Register User"
              type="submit"
            />
          </form>

          {msgerror != null ? (
            <div className="alert alert-danger">{msgerror}</div>
          ) : (
            <span></span>
          )}

          <button
            onClick={loginUser}
            className="btn btn-success btn-block mt-4"
          >
            Sign In
          </button>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default Login;

/*  <div className="container text-center mt-5">
        <h1>Welcome to Free Nutrition Planner . O R G</h1>
        <h2>Please register or log in to access the application </h2>
      </div>

      <div className="row mt-5">
        <div className="col"> </div>
        <div className="col">
          <form  className="form-group">
            <label>Email address</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              placeholder="Enter email"
              type="text"
            />

            <label>Password</label>
            <input
              onChange={(e) => {
                setPass(e.target.value);
              }}
              className="form-control "
              placeholder="Enter password"
              type="password"
            />

            <div className ="form-row d-flex flex-row justify-content-center">

            <input
              className="btn btn-primary btn-block mt-4 "
              value="Sign Up"
              onClick={registerUser}
            />
         

          {msgerror != null ? (
            <div className="alert alert-danger">{msgerror}</div>
          ) : (
            <span></span>
          )}

          <button
            value="Sign In"
            onClick={loginUser}
            className="btn btn-success btn-block mt-4 ms-4"
          >
            Sign In
          </button>
          </div>
          </form>


        </div>
        <div className="col"></div>
      </div> */