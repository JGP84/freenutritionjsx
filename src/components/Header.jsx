import { useContext } from "react";
import { UserContext } from "../UserContext";
import Navbar from "./header_components/Navbar";
import InputRadio from "./header_components/InputRadio";
import InputMacrosPercentage from "./header_components/InputMacrosPercentage";
import InputMacros from "./header_components/InputMacros";
import SearchFood from "./header_components/SearchFood";

function Header() {
  const { isReqGrams } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <InputRadio />
      <div className="form-row d-flex ">
        {isReqGrams ? <InputMacrosPercentage /> : <InputMacros />}
        <SearchFood />
      </div>
    </>
  );
}

export default Header;
