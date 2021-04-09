import React, { useContext } from "react";
import { UserContext } from "../../UserContext.js";

import { Doughnut } from "react-chartjs-2";

/* Functions in OutputMacros:

percenProt
percenLip
percenCarb

*******
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
*****

addProteins
addLipids
addHc
addKcal

formatAddProteins
formatAddLipids
formatAddHc
formatAddKcal




*/





/* import {
  addFoodWeight,
  addProteins,
  addLipids,
  addHc,
  addKcal,
} from "/Users/jose/Desktop/freenutritionjsx/client/src/functions.js"; */

const OutputMacros = () => {
  const { arrFoods, inputProt, inputLip, inputCarb } = useContext(UserContext);

  /* DoughnutChart */

  const percenProt = () => {
    if (addProteins() === 0) {
      return 0;
    } else {
      return Math.round((100 * addProteins() * 4) / addKcal());
    }
  };

  const percenLip = () => {
    if (addLipids() === 0) {
      return 0;
    } else {
      return Math.round((100 * addLipids() * 9) / addKcal());
    }
  };
  const percenCarb = () => {
    if (addHc() === 0) {
      return 0;
    } else {
      return Math.round((100 * addHc() * 4) / addKcal());
    }
  };

  const data = {
    /* labels: ["% Proteins", "% Lipids", "% Carbohydrates"] , */
    datasets: [
      {
        label: "Macronutrients",
        data: [percenProt(), percenLip(), percenCarb()],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",

          "#b65c03",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: false,
      text: "Macronutrients",
    },
  };
  /* End DoughnutChart  */

  function addFoodWeight() {
    //cambia el valor de la propiedad foodWeight

    for (let i = 0; i < nintCards().length; i++) {
      arrFoods[i].foodWeight = arrFoods[i].weight_int * addOuputsFoods()[i];
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

  function addProteins() {
    if (nintCards().length < 1) {
      return 0;
    } else {
      const arrAdd = [];

      for (let i = 0; i < nintCards().length; i++) {
        const add = arrFoods[i].prot * addOuputsFoods()[i];

        arrAdd.push(add);
      }

      return arrAdd.reduce((a, b) => a + b);
    }
  }

  function addLipids() {
    if (nintCards().length < 1) {
      return 0;
    } else {
      const arrAdd = [];

      for (let i = 0; i < nintCards().length; i++) {
        const add = arrFoods[i].lip * addOuputsFoods()[i];

        arrAdd.push(add);
      }

      return arrAdd.reduce((a, b) => a + b);
    }
  }

  function addHc() {
    if (nintCards().length < 1) {
      return 0;
    } else {
      const arrAdd = [];

      for (let i = 0; i < nintCards().length; i++) {
        const add = arrFoods[i].hc * addOuputsFoods()[i];

        arrAdd.push(add);
      }

      return arrAdd.reduce((a, b) => a + b);
    }
  }

  function addKcal() {
    return addProteins() * 4 + addLipids() * 9 + addHc() * 4;
  }
  const formatAddProteins = () => {
    return Math.round(addProteins());
  };
  const formatAddLipids = () => {
    return Math.round(addLipids());
  };
  const formatAddHc = () => {
    return Math.round(addHc());
  };

  const formatAddKcal = () => {
    return Math.round(addKcal());
  };
  return (
    <>
      <div className="form-row d-flex p-3">
        <form>
          <label>
            <h2>Results</h2>
          </label>

          <hr />
          <div className="form-row d-flex flex-row">
            <div className="col-md-4 mb-4">
              <label>
                <h4>Proteins</h4>
              </label>
              <input
               
                className="form-control w-75 text-center mt-1 ouputMacros"
                placeholder="Protein in g"
                value={percenProt() + "%" + " / " +  formatAddProteins()+ "g"}
                onChange={addFoodWeight}
                style={{ backgroundColor: "rgba(255, 99, 132, 1)" }}
              ></input>
            </div>
            <div className="col-md-4 mb-4">
              <label>
                <h4>Fats</h4>
              </label>
              <input
               
                className="form-control w-75 text-center mt-1 ouputMacros"
                placeholder="Lipids in g"
                value={percenLip()  + "%" + " / " + formatAddLipids() + "g"}
                onChange={addFoodWeight}
                style={{ backgroundColor: "rgba(255, 205, 86, 1)" }}
              ></input>
            </div>
            <div className="col-md-4 mb-4">
              <label>
                <h4>Carbohydrates</h4>
              </label>
              <input
                
                className="form-control w-75 text-center mt-1 ouputMacros"
                placeholder="Carbohydrates in g"
                value={ percenCarb()+ "%" + " / " + formatAddHc() + "g"}
                onChange={addFoodWeight}
                style={{ backgroundColor: "#b65c03" }}
              ></input>
            </div>
          </div>
        </form>
        {/*  */}
        <div className="form-row d-flex">
          <div className="container mt-3 ">
            <Doughnut data={data} options={options} />
          </div>

          <div className= "divMacros ">
            <label>
              <h4>CALORIES</h4>
            </label>
            <input
              className="form-control col-auto kcalOuput"
              placeholder="Carbohydrates in g"
              value={formatAddKcal() + "Kcal"}
              onChange={addFoodWeight}
            ></input>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default OutputMacros;
