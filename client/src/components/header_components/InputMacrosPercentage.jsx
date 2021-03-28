import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext.js";

/* import { addFoodWeight } from "/Users/jose/Desktop/freenutritionjsx/client/src/functions.js" */

const InputMacrosPercentage = () => {
  const [inputKcal, setInputKcal] = useState(2000);
  /* const [inputProtPerc, setInputProtPerc] = useState(0); */

  const {
    inputProt,
    setInputProt,
    inputLip,
    setInputLip,
    inputCarb,
    setInputCarb,
    inputProtPerc,
    setInputProtPerc,
    inputLipPerc,
    setInputLipPerc,
    inputCarbPerc,
    setInputCarbPerc,
    arrFoods,
  } = useContext(UserContext);

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
    const inputProtein = 10;
    setInputProtPerc(inputProtein);
    const percentageToGramsProt = ((inputProtein / 100) * inputKcal) / 4;
    setInputProt(percentageToGramsProt);
    addFoodWeight();
    /*  */

    /* Lip */
    const inputLipids = 35;
    setInputLipPerc(inputLipids);
    const percentageToGramsLip = ((inputLipids / 100) * inputKcal) / 9;
    setInputLip(percentageToGramsLip);
    addFoodWeight();
    /*  */

    /*Carb  */
    const inputCarbohidrats = 55;
    setInputCarbPerc(inputCarbohidrats);
    const percentageToGramsCarb = ((inputCarbohidrats / 100) * inputKcal) / 4;
    setInputCarb(percentageToGramsCarb);
    addFoodWeight();
    /*  */

    /* updateInputProtPerc(event)
    updateInputLipPerc(event)
    updateInputCarbPerc(event) */
  }

  function addFoodWeight() {
    for (let i = 0; i < nintCards().length; i++) {
      arrFoods[i].foodWeight =
        Math.round((arrFoods[i].weight_int * addOuputsFoods()[i]) / 5) * 5;
    }

    return;
  }

  function nintCards() {
    const nintCards = [];

    if (arrFoods.length < 1) {
      return [];
    } else {
      for (let i = 0; i < arrFoods.length; i++) {
        let x = arrFoods[i].n_int_card;

        nintCards.push(x);
      }

      return nintCards;
    }
  }

  function addOuputsFoods() {
    //insertamos los intercambios de starchyFoods
    const arrOuputsFoods = JSON.parse(JSON.stringify(nintCards()));

    for (let i = 0; i < nintCards().length; i++) {
      arrOuputsFoods[starchyFoodsIndex()[i]] =
        n_int_starchyFoods() / starchyFoodsIndex().length;
    }

    //insertamos los intercambios de proteinFoods
    for (let i = 0; i < nintCards().length; i++) {
      arrOuputsFoods[proteinFoodIndex()[i]] =
        nintProtein() / proteinFoodIndex().length;
    }
    //insertamos los intercambios de lipidos
    for (let i = 0; i < nintCards().length; i++) {
      arrOuputsFoods[lipidsIndex()[i]] = nintLipids() / lipidsIndex().length;
    }

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
    const arrAdd = [];

    let x = 0;
    if (nintCards().length < 1) {
      x = 1;
    } else {
      x = nintCards().length;
    }

    for (let i = 0; i < x; i++) {
      const add = nintCards()[i] * gHcIntCards()[i];
      arrAdd.push(add);
    }

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
    const arrAdd = [];

    const nintCards1 = JSON.parse(JSON.stringify(nintCards()));

    const indices = [];

    const element = "starchyFoods";

    let idx = arrFoods.map((e) => e.type).indexOf(element);
    while (idx !== -1) {
      indices.push(idx);

      idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
    }

    for (let i = 0; i < indices.length; i++) {
      nintCards1[indices[i]] = n_int_starchyFoods() / indices.length;
    }

    let x = 0;
    if (nintCards().length < 1) {
      x = 1;
    } else {
      x = nintCards().length;
    }

    for (let i = 0; i < x; i++) {
      const add = nintCards1[i] * gProtIntCards()[i];
      arrAdd.push(add);
    }

    return arrAdd.reduce((a, b) => a + b);
  }

  function totalLipids() {
    const arrAdd = [];

    const nintCards2 = JSON.parse(JSON.stringify(nintCards()));

    const indices = [];

    const element = "starchyFoods";

    let idx = arrFoods.map((e) => e.type).indexOf(element);
    while (idx !== -1) {
      indices.push(idx);

      idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
    }

    for (let i = 0; i < indices.length; i++) {
      nintCards2[indices[i]] = n_int_starchyFoods() / indices.length;
    }
    //calculo lo mismo para los indices proteinas
    const indices1 = [];

    const element1 = "proteinFoods";

    let idx1 = arrFoods.map((e) => e.type).indexOf(element1);
    while (idx1 !== -1) {
      indices1.push(idx1);

      idx1 = arrFoods.map((e) => e.type).indexOf(element1, idx1 + 1);
    }

    for (let i = 0; i < indices.length; i++) {
      nintCards2[indices1[i]] = nintProtein() / indices1.length;
    }

    let x = 0;
    if (nintCards().length < 1) {
      x = 1;
    } else {
      x = nintCards().length;
    }

    for (let i = 0; i < x; i++) {
      const add = nintCards2[i] * gLipIntCards()[i];
      arrAdd.push(add);
    }

    return arrAdd.reduce((a, b) => a + b);
  }

  function nintProtein() {
    return (inputProt - totalProtein()) / 7;
  }

  function nintLipids() {
    return (inputLip - totalLipids()) / 5;
  }

  function gProtIntCards() {
    const gProtIntCards = [];

    if (arrFoods.length < 1) {
      return [];
    } else {
      for (let i = 0; i < arrFoods.length; i++) {
        let x = arrFoods[i].prot;

        gProtIntCards.push(x);
      }

      return gProtIntCards;
    }
  }

  function gLipIntCards() {
    const gLipIntCards = [];

    if (arrFoods.length < 1) {
      return [];
    } else {
      for (let i = 0; i < arrFoods.length; i++) {
        let x = arrFoods[i].lip;

        gLipIntCards.push(x);
      }

      return gLipIntCards;
    }
  }

  function gHcIntCards() {
    const gHcIntCards = [];

    if (arrFoods.length < 1) {
      return [];
    } else {
      for (let i = 0; i < arrFoods.length; i++) {
        let x = arrFoods[i].hc;

        gHcIntCards.push(x);
      }

      return gHcIntCards;
    }
  }

  const handler = (event) => {
    if (event.key === "Enter") {
      updateInputKcalPerc();
    }
  };

  return (
    <form className="col p-3">
      {/* <div className ="d-flex  align-items-center">
     <label>
        {" "}
        <h2>Requirements</h2>
      </label>


     
      <div className ="ms-5">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Grams (g)
        </label>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Percentage (%)
        </label>
      </div>
     </div>
      </div> */}

      <div>
        <label>
          <h4>CALORIES</h4>
        </label>
        <input
          name="inputKcal"
          className="form-control w-75 col-auto kcal"
          placeholder="Enter your Kcal"
          onChange={updateInputKcalPerc}
          type="number"
          step="100"
          value={inputKcal}
          onKeyPress={(e) => handler(e)}
        ></input>
      </div>

      {/*  */}
      <hr />
      <div className="form-row d-flex flex-row ">
        <div className="col-md-4 mb-3">
          <label>
            {" "}
            <h4>Proteins (%)</h4>
          </label>
          <input
            name="inputProt"
            id="inputMacros"
            onChange={updateInputProtPerc}
            type="number"
            className="form-control w-75"
            placeholder="Protein in %"
            value={inputProtPerc}
          ></input>
        </div>
        <div className="col-md-4 mb-3">
          <label>
            {" "}
            <h4>Fats (%)</h4>
          </label>
          <input
            name="inputLip"
            id="inputMacros"
            onChange={updateInputLipPerc}
            type="number"
            className="form-control w-75"
            placeholder="Lipids in %"
            value={inputLipPerc}
          ></input>
        </div>
        <div className="col-md-4 mb-3">
          <label>
            {" "}
            <h4>Carbohydrates (%)</h4>
          </label>
          <input
            name="inputCarb"
            id="inputMacros"
            onChange={updateInputCarbPerc}
            type="number"
            className="form-control w-75"
            placeholder="Carbo. in %"
            value={inputCarbPerc}
          ></input>
        </div>
      </div>
    </form>
  );
};

export default InputMacrosPercentage;
