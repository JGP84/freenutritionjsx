import React from 'react'
import { BsHeartFill } from "react-icons/bs";
import Menu from "../authentication-firebase/Menu";

const About = () => {
    return (
        <>
        <Menu />
            <div className=" container text-center p-5">
            <h1>About</h1>
            <h3>Thank you for visit this web,
            it is under construction and it is being built with love <BsHeartFill /> for you </h3>
            </div>
        </>
    )
}

export default About
