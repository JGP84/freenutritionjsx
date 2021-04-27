import React from "react";
import Navbar from "../components/header_components/Navbar";
import { BsHeartFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <Navbar />
      <div className=" container text-center p-5">
        <h1>About</h1>
        <h3>
          Thank you for visit this web, it is under construction and it is being
          built with love <BsHeartFill /> for you{" "}
        </h3>
      </div>
    </>
  );
};

export default About;
