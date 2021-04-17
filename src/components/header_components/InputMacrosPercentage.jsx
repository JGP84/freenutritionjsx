import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext.js";
import useDietLogic from "../../hooks/useDietLogic.jsx";



/* Functions in InputMacrosPercentage:

updateInputProtPerc
updateInputLipPerc
updateInputCarbPerc
updateInputKcalPerc

*****
addFoodWeight
*****

handler

*/

const InputMacrosPercentage = () => {
  
  const [inputKcal, setInputKcal] = useState(2000);
  

  const {
    setInputProt,
    setInputLip,
    setInputCarb,
    inputProtPerc,
    setInputProtPerc,
    inputLipPerc,
    setInputLipPerc,
    inputCarbPerc,
    setInputCarbPerc,
  } = useContext(UserContext);

  const { addFoodWeight } = useDietLogic();

  function updateInputProtPerc(event) {
    const inputProtein = event.target.value;
    setInputProtPerc(inputProtein);
    const percentageToGrams = ((inputProtein / 100) * inputKcal) / 4;
    setInputProt(percentageToGrams);
    addFoodWeight();
  }

  function updateInputLipPerc(event) {
    const inputLipids = event.target.value;
    setInputLipPerc(inputLipids);
    const percentageToGrams = ((inputLipids / 100) * inputKcal) / 9;
    setInputLip(percentageToGrams);
    addFoodWeight();
  }

  function updateInputCarbPerc(event) {
    const inputCarbohidrats = event.target.value;
    setInputCarbPerc(inputCarbohidrats);
    const percentageToGrams = ((inputCarbohidrats / 100) * inputKcal) / 4;
    setInputCarb(percentageToGrams);
    addFoodWeight();
  }

  function updateInputKcalPerc(event) {
    const inputKcal = event.target.value;
    setInputKcal(inputKcal);
    addFoodWeight();

    /* Prot */
    const inputProtein = inputProtPerc;
    setInputProtPerc(inputProtein);
    const percentageToGramsProt = ((inputProtein / 100) * inputKcal) / 4;
    setInputProt(percentageToGramsProt);
    addFoodWeight();
    /*  */

    /* Lip */
    const inputLipids = inputLipPerc;
    setInputLipPerc(inputLipids);
    const percentageToGramsLip = ((inputLipids / 100) * inputKcal) / 9;
    setInputLip(percentageToGramsLip);
    addFoodWeight();
    /*  */

    /*Carb  */
    const inputCarbohidrats = inputCarbPerc;
    setInputCarbPerc(inputCarbohidrats);
    const percentageToGramsCarb = ((inputCarbohidrats / 100) * inputKcal) / 4;
    setInputCarb(percentageToGramsCarb);
    addFoodWeight();
    /*  */
  }

  const handler = (event) => {
    if (event.key === "Enter") {
      updateInputKcalPerc();
    }
  };

  return (
    <form className="col p-3">
      <div className="divMacros  mb-5">
        <label>
          <h4>CALORIES</h4>
        </label>
        <input
          name="inputKcal"
          className=" kcal mt-1"
          placeholder="Enter your Kcal"
          onChange={updateInputKcalPerc}
          type="number"
          step="100"
          value={inputKcal}
          onKeyPress={(e) => handler(e)}
        ></input>
      </div>

      {/* Macros */}

      <div className="form-row d-flex flex-row ">
        <div className="col-md-4 mb-3">
          <div className="divMacros">
            <label>
              <h4>% Prot </h4>
            </label>
            <input
              name="inputProt"
              onChange={updateInputProtPerc}
              type="number"
              className="inputMacros mt-1"
              placeholder="Protein in %"
              value={inputProtPerc}
            ></input>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="divMacros">
            <label>
              <h4>% Fats </h4>
            </label>
            <input
              name="inputLip"
              onChange={updateInputLipPerc}
              type="number"
              className="inputMacros mt-1"
              placeholder="Lipids in %"
              value={inputLipPerc}
            ></input>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="divMacros">
            <label>
              <h4>% Carb </h4>
            </label>
            <input
              name="inputCarb"
              onChange={updateInputCarbPerc}
              type="number"
              className="inputMacros mt-1"
              placeholder="Carbo. in %"
              value={inputCarbPerc}
            ></input>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputMacrosPercentage;
