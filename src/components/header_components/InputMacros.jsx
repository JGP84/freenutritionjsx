import React, { useContext } from "react";
import { UserContext } from "../../UserContext.js";
import NumberFormat from "react-number-format";

/* import {  addFoodWeight,
  nintCards,
  addOuputsFoods,
  starchyFoodsIndex,
  n_int_starchyFoods,
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
n_int_starchyFoods
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
    let nintCards = [];

    nintCards = arrFoods.map((item) => {
      return item.n_int_card;
    });

    return nintCards;
  }

  function addOuputsFoods() {
    //insertamos los intercambios de starchyFoods
    const arrOuputsFoods = nintCards();

    console.log("arrOuputsFoods.length", arrOuputsFoods.length);

    arrOuputsFoods.forEach((i) => {
      arrOuputsFoods[starchyFoodsIndex()[i]] =
        n_int_starchyFoods() / starchyFoodsIndex().length;
    });

    //insertamos los intercambios de proteinFoods
    arrOuputsFoods.forEach((i) => {
      arrOuputsFoods[proteinFoodIndex()[i]] =
        nintProtein() / proteinFoodIndex().length;
    });
    //insertamos los intercambios de lipidos
    arrOuputsFoods.forEach((i) => {
      arrOuputsFoods[lipidsIndex()[i]] = nintLipids() / lipidsIndex().length;
    });

    return arrOuputsFoods;
  }

  function starchyFoodsIndex() {
    const indices1 = [];

    const element = "starchyFoods";

    let idx = arrFoods.map((e) => e.type).indexOf(element);
    while (idx !== -1) {
      indices1.push(idx);

      idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
    }

    return indices1;
  }

  function n_int_starchyFoods() {
    return (inputCarb - totalHc()) / 14;
  }

  function totalHc() {
    let arrAdd = [];

    arrAdd = nintCards().map((item, i) => {
      return (item = nintCards()[i] * gHcIntCards()[i]);
    });

    return arrAdd.reduce((a, b) => a + b);
  }

  function proteinFoodIndex() {
    const indices2 = [];

    const element2 = "proteinFoods";

    let idx2 = arrFoods.map((e) => e.type).indexOf(element2);
    while (idx2 !== -1) {
      indices2.push(idx2);

      idx2 = arrFoods.map((e) => e.type).indexOf(element2, idx2 + 1);
    }

    return indices2;
  }

  function lipidsIndex() {
    const indices3 = [];

    const element3 = "fats";

    let idx3 = arrFoods.map((e) => e.type).indexOf(element3);
    while (idx3 !== -1) {
      indices3.push(idx3);

      idx3 = arrFoods.map((e) => e.type).indexOf(element3, idx3 + 1);
    }

    return indices3;
  }

  function totalProtein() {
    const indices = [];

    const element = "starchyFoods";

    let idx = arrFoods.map((e) => e.type).indexOf(element);
    while (idx !== -1) {
      indices.push(idx);

      idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
    }
    ///

    let arrAdd = [];

    arrAdd = nintCards().map((item, i) => {
      return (item = nintCards()[i] * gProtIntCards()[i]);
    });

    return arrAdd.reduce((a, b) => a + b);
  }

  function totalLipids() {
    const indices = [];

    const element = "starchyFoods";

    let idx = arrFoods.map((e) => e.type).indexOf(element);
    while (idx !== -1) {
      indices.push(idx);

      idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
    }
    //calculo lo mismo para los indices proteinas
    const indices1 = [];

    const element1 = "proteinFoods";

    let idx1 = arrFoods.map((e) => e.type).indexOf(element1);
    while (idx1 !== -1) {
      indices1.push(idx1);

      idx1 = arrFoods.map((e) => e.type).indexOf(element1, idx1 + 1);
    }

    ///
    let arrAdd = [];

    arrAdd = nintCards().map((item, i) => {
      return (item = nintCards()[i] * gLipIntCards()[i]);
    });
    return arrAdd.reduce((a, b) => a + b);
  }

  function nintProtein() {
    return (inputProt - totalProtein()) / 7;
  }

  function nintLipids() {
    return (inputLip - totalLipids()) / 5;
  }

  function gProtIntCards() {
    let gProtIntCards = [];

    return (gProtIntCards = arrFoods.map((item, i) => {
      return (item = arrFoods[i].prot);
    }));
  }

  function gLipIntCards() {
    let gLipIntCards = [];

    return (gLipIntCards = arrFoods.map((item, i) => {
      return (item = arrFoods[i].lip);
    }));
  }

  function gHcIntCards() {
    let gHcIntCards = [];

    return (gHcIntCards = arrFoods.map((item, i) => {
      return (item = arrFoods[i].hc);
    }));
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
