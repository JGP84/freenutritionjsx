import { useState, useContext } from "react";
import Navbar from "./header_components/Navbar";
import InputMacros from "./header_components/InputMacros";

import SearchFood from "./header_components/SearchFood";
import Menu from "../authentication-firebase/Menu";
import InputMacrosPercentage from "./header_components/InputMacrosPercentage";
import InputRadio from "./header_components/InputRadio";
/* import OutputMacros from "./header_components/OutputMacros"; */

import { UserContext } from "../UserContext";

function Header() {
  const { isReqGrams } = useContext(UserContext);

  return (
    <>
      {/* Navbar /> */}
      <Menu />
      <InputRadio />
      <div className="form-row d-flex ">
        {isReqGrams ? <InputMacrosPercentage /> : <InputMacros />  }
        <SearchFood />
      </div>

      {/* <OutputMacros /> */}
    </>
  );
}

export default Header;
