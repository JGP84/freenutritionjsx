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
        console.log("err", err);
        if (err.code === "auth/invalid-email") {
          setMsgError("Email equired in correct format");
        }
        if (err.code === "auth/weak-password") {
          setMsgError("Password must be 6 characters or more");
        }
        if (err.code === "auth/email-already-in-use") {
          setMsgError("The email address is already in use by another account");
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
        console.log("err", err);
        if (err.code === "auth/invalid-email") {
          setMsgError("Email required in correct format");
        }
        if (err.code === "auth/user-not-found") {
          setMsgError("Wrong User");
        }
        if (err.code === "auth/wrong-password") {
          setMsgError("Wrong Password");
        }

      });
  };

  return (
    <>
      <Menu />
      <div className="container text-center mt-5">
        <h1>Welcome to Free Nutrition Planner . O R G</h1>
        <h2>Please create an account or login to access the application </h2>
      </div>

      <div className="row mt-5 text-center">
        <div className="col"> </div>
        <div className="col">
          <form onSubmit={registerUser} className="form-group">
            <label>Email address</label>

            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control text-center mt-1 mb-1"
              placeholder="Enter email"
              type="email"
            />

            <label>Password</label>
            <input
              onChange={(e) => {
                setPass(e.target.value);
              }}
              className="form-control text-center mt-1 "
              type="password"
              placeholder="Password"
            />

            {msgerror != null ? (
              <span className="text-danger text-small d-block mt-4">
                {msgerror}
              </span>
            ) : (
              <span></span>
            )}

            <input
              className="btn btn-primary w-100 mt-4 "
              value="Create Account"
              type="submit"
            />
          </form>

          <div>
            <span className="textOr">or</span>
          </div>
          <button
            type="button"
            onClick={loginUser}
            className="btn btn-success w-100 "
          >
            Login
          </button>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default Login;
