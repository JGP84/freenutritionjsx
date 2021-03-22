
import React, { useContext } from "react";
import { UserContext } from "../../UserContext.js";

import { addFoodWeight } from "/Users/jose/Desktop/freenutritionjsx/client/src/functions.js"

const InputMacros = () => {
  const {
    inputProt,
    setInputProt,
    inputLip,
    setInputLip,
    inputCarb,
    setInputCarb,
    
  } = useContext(UserContext);

  
  function updateInputProt(event) {
    const inputProtein = event.target.value;
    setInputProt(inputProtein);
    addFoodWeight()
  }
  function updateInputLip(event) {
    const inputLipids = event.target.value;
    setInputLip(inputLipids);
    addFoodWeight()
  }
  function updateInputCarb(event) {
    const inputCarbohidrats = event.target.value;
    setInputCarb(inputCarbohidrats);
    addFoodWeight()
  }

 

  
  
  

  return (
    <form className="col p-3">
      <label>
        {" "}
        <h2>Requirements</h2>
      </label>
      <hr />
      <div className="form-row d-flex flex-row ">
        <div className="col-md-4 mb-3">
          <label>
            {" "}
            <h4>Prot.</h4>
          </label>
          <input
            name="inputProt"
            onChange= {updateInputProt}
            type="number"
            className="form-control w-75"
            placeholder="Protein in g"
            value={inputProt}
            
          ></input>
        </div>
        <div className="col-md-4 mb-3">
          <label>
            {" "}
            <h4>Lip.</h4>
          </label>
          <input
            name="inputLip"
            onChange={updateInputLip}
            type="number"
            className="form-control w-75"
            placeholder="Lipids in g"
            value={inputLip}
            
          ></input>
        </div>
        <div className="col-md-4 mb-3">
          <label>
            {" "}
            <h4>Carb.</h4>
          </label>
          <input
            name="inputCarb"
            onChange={updateInputCarb}
            type="number"
            className="form-control w-75"
            placeholder="Carbohydrates in g"
            value={inputCarb}
            
          ></input>
        </div>
      </div>
    </form>
  );
};

export default InputMacros;
