import { useContext } from "react";

import InputMacros from "./header_components/InputMacros";

import SearchFood from "./header_components/SearchFood";
import Menu from "../authentication-firebase/Menu";
import InputMacrosPercentage from "./header_components/InputMacrosPercentage";
import InputRadio from "./header_components/InputRadio";


import { UserContext } from "../UserContext";

function Header() {
  const { isReqGrams } = useContext(UserContext);

  return (
    <>
      <Menu />
      <InputRadio />
      <div className="form-row d-flex ">
        {isReqGrams ? <InputMacrosPercentage /> : <InputMacros />}
        <SearchFood />
      </div>
    </>
  );
}

export default Header;
