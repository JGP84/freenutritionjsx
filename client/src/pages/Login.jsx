import { useState } from "react";
import { auth } from "../authentication-firebase/firebaseconfig";
import { useHistory } from "react-router-dom";

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
    {/* Test new login */}
    <form>
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
            </form>
    {/* end new login */}


     {/*  <div className="container text-center mt-5">
        <h1>Welcome to Free Nutrition Planner . O R G</h1>
        <h2>Please register or log in to access the application </h2>
      </div>

      <div className="row mt-5">
        <div className="col"> </div>
        <div className="col">
          <form onSubmit={registerUser} className="form-group">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              placeholder="Enter the mail"
              type="text"
            />
            <input
              onChange={(e) => {
                setPass(e.target.value);
              }}
              className="form-control mt-4"
              placeholder="Enter the password"
              type="password"
            />
            <input
              className="btn btn-dark btn-block mt-4"
              value="Register user"
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
            Sign in
          </button>
        </div>
        <div className="col"></div>
      </div> */}
    </>
  );
};

export default Login;
