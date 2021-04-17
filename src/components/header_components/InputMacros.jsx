import React, { useContext } from "react";
import { UserContext } from "../../UserContext.js";
import NumberFormat from "react-number-format";



import useDietLogic from "../../hooks/useDietLogic.jsx";



/* import { macrosIndex, gMacrosIntCards, addMacros, addFoodWeight,
  nintCards,
  addOuputsFoods,
  starchyFoodsIndex,
  nintStarchyFoods,
  totalHc,
  proteinFoodIndex,
  lipidsIndex,
  totalProtein,
  totalLipids,
  nintProtein,
  nintLipids,
  gProtIntCards,
  gLipIntCards,
  gHcIntCards  } from "../../functionsParams"  */

/* Functions in InputMacros:

updateInputProt
updateInputLip
updateInputCarb

*****
useDietLogic addFoodWeight

******

formatProt
formatLip
formatCarb








*/

const InputMacros = () => {
  const {
    inputProt,
    setInputProt,
    inputLip,
    setInputLip,
    inputCarb,
    setInputCarb,
    
  } = useContext(UserContext);

  const { addFoodWeight} = useDietLogic ();

  function updateInputProt(event) {
    const inputProtein = event.target.value;
    setInputProt(inputProtein);
    addFoodWeight();
  }
  function updateInputLip(event) {
    const inputLipids = event.target.value;
    setInputLip(inputLipids);
    addFoodWeight();
  }
  function updateInputCarb(event) {
    const inputCarbohidrats = event.target.value;
    setInputCarb(inputCarbohidrats);
    addFoodWeight();
  }

  /////////////////

  

 




  //////////////////////

  const formatProt = () => {
    let formatProt = Math.round(inputProt);
    /* formatProt=`${formatProt}g` */
    return formatProt;
  };

  const formatLip = () => {
    return Math.round(inputLip);
  };

  const formatCarb = () => {
    return Math.round(inputCarb);
  };

  return (
    <form className="col p-3 mt-4">
      <div className="form-row d-flex flex-row ">
        <div className="col-md-4 mb-3">
          <div className="divMacros">
            <label>
              {" "}
              <h4>g Prot</h4>
            </label>
            <NumberFormat
              name="inputProt"
              onChange={updateInputProt}
              type="number"
              className="inputMacros mt-1"
              placeholder="Pro g"
              /* suffix={'g'} */
              /* displayType={'text'} */
              value={formatProt()}
            ></NumberFormat>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="divMacros">
            <label>
              {" "}
              <h4>g Fats </h4>
            </label>
            <input
              name="inputLip"
              onChange={updateInputLip}
              type="number"
              className="inputMacros mt-1"
              placeholder="Lip g"
              value={formatLip()}
            ></input>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="divMacros">
            <label>
              {" "}
              <h4>g Carb </h4>
            </label>
            <input
              name="inputCarb"
              onChange={updateInputCarb}
              type="number"
              className="inputMacros mt-1"
              placeholder="CH g"
              value={formatCarb()}
            ></input>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputMacros;
