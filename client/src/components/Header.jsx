
import Navbar from "./header_components/Navbar";
import InputMacros from "./header_components/InputMacros";

import SearchFood from "./header_components/SearchFood";
import Menu from "../authentication-firebase/Menu"
/* import OutputMacros from "./header_components/OutputMacros"; */


function Header() {
  return (
    <>
      {/* Navbar /> */}
      <Menu />
      <div className="form-row d-flex " >
        <InputMacros />
        
        <SearchFood />
        
      </div>
      
      {/* <OutputMacros /> */}
    </>
  );
}

export default Header;
