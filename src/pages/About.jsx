import React from "react";
import Navbar from "../components/header_components/Navbar";
import { BsHeartFill } from "react-icons/bs";

const About = () => {

  const imgLink = "./assets/undraw_Web_developer_re_h7ie.svg"

  const imgLink2 ="./assets/imagesFoodDatabase/proteinFoods/egg.webp"
  return (
    <>
      <Navbar />
      <div className=" container text-center p-5">
        <h1>About</h1>
        <h3>
          Thank you for visit this web, it is under construction and it is being
          built with love <BsHeartFill /> for you{" "}
        </h3>
        <img className="mt-5" src={imgLink} alt="img" width="35%"/>
      </div>
    </>
  );
};

export default About;
