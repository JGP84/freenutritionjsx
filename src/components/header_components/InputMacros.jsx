import React, { useContext } from "react";
import { UserContext } from "../../UserContext.js";
import NumberFormat from "react-number-format";

import { macrosIndex, gMacrosIntCards, addMacros } from "../../functionsParams";

/* import {  addFoodWeight,
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
addFoodWeight
nintCards
addOuputsFoods
starchyFoodsIndex
nintStarchyFoods
totalHc
proteinFoodIndex
lipidsIndex
totalProtein
totalLipids
nintProtein
nintLipids
gProtIntCards
gLipIntCards
gHcIntCards
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
    arrFoods,
  } = useContext(UserContext);

  function updateInputProt(event) {
    const inputProtein = event.target.value;
    setInputProt(inputProtein);
    addFoodWeight(arrFoods);
  }
  function updateInputLip(event) {
    const inputLipids = event.target.value;
    setInputLip(inputLipids);
    addFoodWeight(arrFoods);
  }
  function updateInputCarb(event) {
    const inputCarbohidrats = event.target.value;
    setInputCarb(inputCarbohidrats);
    addFoodWeight(arrFoods);
  }

  /////////////////

  function addFoodWeight() {
    arrFoods.forEach((item, i) => {
      item.foodWeight = item.weight_int * addOuputsFoods()[i];
    });
  }

  function nintCards() {
    // return array

    return arrFoods.map((item) => {
      return item.n_int_card;
    });
  }

  function addOuputsFoods() {
    //insert the exchanges of starchyFoods
    const arrOuputsFoods = nintCards();

    arrOuputsFoods.forEach((i) => {
      arrOuputsFoods[starchyFoodsIndex()[i]] =
        nintStarchyFoods() / starchyFoodsIndex().length;
    });

    //insert the exchanges of proteinFoods
    arrOuputsFoods.forEach((i) => {
      arrOuputsFoods[proteinFoodIndex()[i]] =
        nintProtein() / proteinFoodIndex().length;
    });
    //insert the exchanges of fats
    arrOuputsFoods.forEach((i) => {
      arrOuputsFoods[lipidsIndex()[i]] = nintLipids() / lipidsIndex().length;
    });

    return arrOuputsFoods;
  }

  function starchyFoodsIndex() {
    return macrosIndex("starchyFoods", arrFoods);
  }

  function nintStarchyFoods() {
    return (inputCarb - totalHc()) / 14;
  }

  function totalHc() {
    return addMacros(nintCards, gHcIntCards);
  }

  function proteinFoodIndex() {
    return macrosIndex("proteinFoods", arrFoods);
  }

  function lipidsIndex() {
    return macrosIndex("fats", arrFoods);
  }

  function totalProtein() {
    starchyFoodsIndex();

    return addMacros(nintCards, gProtIntCards);
  }

  function totalLipids() {
    starchyFoodsIndex();

    proteinFoodIndex();

    return addMacros(nintCards, gLipIntCards);
  }

  function nintProtein() {
    return (inputProt - totalProtein()) / 7;
  }

  function nintLipids() {
    return (inputLip - totalLipids()) / 5;
  }

  function gProtIntCards() {
    return gMacrosIntCards("prot", arrFoods);
  }

  function gLipIntCards() {
    return gMacrosIntCards("lip", arrFoods);
  }

  function gHcIntCards() {
    return gMacrosIntCards("hc", arrFoods);
  }

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
