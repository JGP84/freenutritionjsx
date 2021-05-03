import { useState } from "react";

const InputFood = () => {
  const [name, setName] = useState("");

  const onSubmitForm = async (e) => {
    /*  console.log("foods", foods) */
    e.preventDefault();
    try {
      const body = { name };
      //proxy is only use in development so it will be ignored in production
      //so if there is no http://localhost:5000 then by default it is going to use heroku domain
      //remember this heroku app is just our server serving the build static content and also holding the restful api

      //https://freenutrition.herokuapp.com/foods
      const response = await fetch(
        "https://backend-challenge-ts.herokuapp.com/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "https://jolly-bell-ad79e8.netlify.app//admin";

      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5"> Food Database</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputFood;
