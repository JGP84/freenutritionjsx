import React, {useState} from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { auth } from "../../authentication-firebase/firebaseconfig";
import { useHistory } from "react-router-dom";

function LoginForm() {
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

  const initialValues = {
    email: "",
    pasword: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required")
  });

 

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={registerUser}
    >
      {formik => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
            <button
              onClick={loginUser}
              className="btn btn-success btn-block mt-4"
            >
              Login
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
