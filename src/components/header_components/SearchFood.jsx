import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext.js";
/* import foodDatabase from "../foodDatabase"; */
import uuid from "react-uuid";
import jsPDF from "jspdf";
import "jspdf-autotable";

/* Functions in SearchFood:

updateFoodNew

addFood
allDelete

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
*****


addProteins
addLipids
addHc
addKcal

percenProt
percenLip
percenCarb

getArrBreakfast
getArrLunch
getArrDinner
getArrSnack

getArrInformation
handler
*/

/* import { addFoodWeight } from "/Users/jose/Desktop/freenutritionjsx/client/src/functions.js" */

const SearchFood = () => {
  const {
    arrFoods,
    setArrFoods,
    inputProt,
    inputLip,
    inputCarb,
    columns,
    setColumns,
    foodDatabase,
    showSnack,
  } = useContext(UserContext);

  const [foodNew, setFoodNew] = useState("");

  function updateFoodNew(event) {
    const foodsNew = event.target.value;
    setFoodNew(foodsNew);
  }

  function addFood() {
    let index = foodDatabase.findIndex((item) => item.name === foodNew);

    if (index !== -1) {
      arrFoods.unshift({
        food_id: foodDatabase[index].food_id,
        name: foodNew,
        type: foodDatabase[index].type,
        weight_int: foodDatabase[index].weight_int,
        prot: foodDatabase[index].prot,
        lip: foodDatabase[index].lip,
        hc: foodDatabase[index].hc,
        img_link: foodDatabase[index].img_link,
        n_int_card: foodDatabase[index].n_int_card,
        foodWeight: 0,
        idUnique: uuid(),
      });

      addFoodWeight();

      /////
      const itemAdd = {
        idUnique: arrFoods[0].idUnique,
        name: arrFoods[0].name,
        foodWeight: arrFoods[0].foodWeight,
        type: arrFoods[0].type,
        img_link: arrFoods[0].img_link,
      };

      const requestColumnId = Object.entries(columns).find(
        (i) => i[1].name === "Breakfast"
      )[0];

      const column = columns[requestColumnId];

      setColumns({
        ...columns,
        [requestColumnId]: {
          ...column,
          items: [...column.items, itemAdd],
        },
      });

      setFoodNew("");
    } else {
    }
  }

  function allDelete() {
    /* window.location.replace(""); */

    setArrFoods([]);

    setColumns({
      [uuid()]: {
        name: "Breakfast",
        items: [],
      },
      [uuid()]: {
        name: "Lunch",
        items: [],
      },

      [uuid()]: {
        name: "Dinner",
        items: [],
      },
    });

    /* arrFoods.splice(0, arrFoods.length)

    setColumns({
      [uuid()]: {
        name: "Breakfast",
        items: [],
      },
      [uuid()]: {
        name: "Lunch",
        items: [],
      },

      [uuid()]: {
        name: "Dinner",
        items: [],
      },
    }); */
  }

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
        nintStarchyFoods() / starchyFoodsIndex().length;
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

  function nintStarchyFoods() {
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
      nintCards1[indices[i]] = nintStarchyFoods() / indices.length;
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
      nintCards2[indices[i]] = nintStarchyFoods() / indices.length;
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
  const percenProt = () => {
    if (addProteins() == 0) {
      return 0;
    } else {
      return (100 * addProteins() * 4) / addKcal();
    }
  };

  const percenLip = () => {
    if (addLipids() == 0) {
      return 0;
    } else {
      return (100 * addLipids() * 9) / addKcal();
    }
  };
  const percenCarb = () => {
    if (addHc() == 0) {
      return 0;
    } else {
      return (100 * addHc() * 4) / addKcal();
    }
  };
  //JSPDF
  /*   var vm = this;
  var columns = [
    { title: "Alimento", dataKey: "nombre" },
    { title: "Tipo", dataKey: "tipo" },
    { title: "Peso neto", dataKey: "pesoAlimento" },
  ];
  var doc = new jsPDF("p", "pt");
  doc.text("Free Vegan Planner . org", 40, 40);
  doc.autoTable(
    columns,
    vm.board.columns[0].tasks,
    vm.board.columns[1].tasks,
    {
      margin: { top: 60 },
    }
  );
  doc.output("dataurlnewwindow"); */

  const getArrBreakfast = () => {
    let arrBreakfast = [];

    const requestColumnId = Object.entries(columns).find(
      (i) => i[1].name === "Breakfast"
    )[0];

    const column = columns[requestColumnId];

    arrBreakfast = [...column.items];

    arrBreakfast.map(function updateFoodweight(element) {
      const index = arrFoods.findIndex(
        (ingredient) => ingredient.idUnique === element.idUnique
      );

      element.foodWeight = Math.round(arrFoods[index].foodWeight / 5) * 5 + "g";
    });

    console.log("arrBreakfast NOW", arrBreakfast);

    return arrBreakfast;
  };

  const getArrLunch = () => {
    let arrLunch = [];

    const requestColumnId = Object.entries(columns).find(
      (i) => i[1].name === "Lunch"
    )[0];

    const column = columns[requestColumnId];
    arrLunch = [...column.items];

    /* return column.items; */
    arrLunch.map(function updateFoodweight(element) {
      const index = arrFoods.findIndex(
        (ingredient) => ingredient.idUnique === element.idUnique
      );

      element.foodWeight = Math.round(arrFoods[index].foodWeight / 5) * 5 + "g";
    });

    console.log("arrLunch NOW", arrLunch);

    return arrLunch;
  };

  const getArrDinner = () => {
    let arrDinner = [];

    const requestColumnId = Object.entries(columns).find(
      (i) => i[1].name === "Dinner"
    )[0];

    const column = columns[requestColumnId];
    arrDinner = [...column.items];

    /* return column.items; */
    arrDinner.map(function updateFoodweight(element) {
      const index = arrFoods.findIndex(
        (ingredient) => ingredient.idUnique === element.idUnique
      );

      element.foodWeight = Math.round(arrFoods[index].foodWeight / 5) * 5 + "g";
    });

    console.log("arrDinner NOW", arrDinner);

    return arrDinner;
  };

  const getArrSnack = () => {
    let arrSnack = [];

    if (showSnack) {
      const requestColumnId = Object.entries(columns).find(
        (i) => i[1].name === "Snack"
      )[0];

      if (requestColumnId !== undefined) {
        const column = columns[requestColumnId];

        /* return column.items; */
        arrSnack = [...column.items];
        arrSnack.map(function updateFoodweight(element) {
          const index = arrFoods.findIndex(
            (ingredient) => ingredient.idUnique === element.idUnique
          );

          element.foodWeight =
            Math.round(arrFoods[index].foodWeight / 5) * 5 + "g";
        });

        console.log("arrSnack NOW", arrSnack);

        return arrSnack;
      }
    }
  };

  let today = new Date();

  /* let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); */
  let date =
    today.getDate() +
    " / " +
    (today.getMonth() + 1) +
    " / " +
    today.getFullYear();

  const getArrInformation = () => {
    let arrInformation = [
      {
        proteins:
          Math.round(percenProt()) +
          "%" +
          " / " +
          Math.round(addProteins()) +
          "g",
        fats:
          Math.round(percenLip()) + "%" + " / " + Math.round(addLipids()) + "g",
        carbohydrates:
          Math.round(percenCarb()) + "%" + " / " + Math.round(addHc()) + "g",
        calories: Math.round(addKcal()) + " kcal",
        date: date,
      },
    ];

    return arrInformation;
  };

  const doc = new jsPDF();

  function exportPDF() {
    const arrBreakfast = getArrBreakfast();
    const arrLunch = getArrLunch();
    const arrDinner = getArrDinner();
    const arrSnack = getArrSnack();
    const arrInformation = getArrInformation();

    let vm = this;
    let columnsBreakfast = [
      { title: "BREAKFAST" },
      { title: "Foods", dataKey: "name" },
      { title: "Grams", dataKey: "foodWeight" },
    ];
    let columnsLunch = [
      { title: "LUNCH         " },
      { title: "Foods", dataKey: "name" },
      { title: "Grams", dataKey: "foodWeight" },
    ];
    let columnsDinner = [
      { title: "DINNER        " },
      { title: "Foods", dataKey: "name" },
      { title: "Grams", dataKey: "foodWeight" },
    ];
    let columnsSnack = [
      { title: "SNACK         " },
      { title: "Foods", dataKey: "name" },
      { title: "Grams", dataKey: "foodWeight" },
    ];
    let columnsInformation = [
      { title: "RESULTS        " },
      { title: "Proteins", dataKey: "proteins" },
      { title: "Fats", dataKey: "fats" },
      { title: "Carbohydrates", dataKey: "carbohydrates" },
      { title: "Calories", dataKey: "calories" },
      { title: "Date", dataKey: "date" },
    ];

    let doc = new jsPDF("p", "pt");

    doc.text("F r e e   N u t r i t i o n   P l a n n e r  .  O R G", 40, 40);
    doc.autoTable(
      columnsBreakfast,
      arrBreakfast,

      {
        margin: { top: 60 },
      }
    );
    doc.autoTable(
      columnsLunch,
      arrLunch,

      {
        margin: { top: 120 },
      }
    );
    doc.autoTable(
      columnsDinner,
      arrDinner,

      {
        margin: { top: 120 },
      }
    );

    if (showSnack) {
      doc.autoTable(
        columnsSnack,
        arrSnack,

        {
          margin: { top: 120 },
        }
      );
    }

    doc.autoTable(
      columnsInformation,
      arrInformation,

      {
        margin: { top: 120 },
      }
    );

    doc.output("dataurlnewwindow");

    //add image in base64 https://parall.ax/products/jspdf
    /* let imgData = 

      doc.addImage(imgData, 'JPEG', 15, 40, 180, 160)

    doc.save("arrAlimentos.pdf"); */
  }

  const handler = (event) => {
    if (event.key === "Enter") {
      addFood();
    }
  };

  return (
    <>
      <div className="col p-3">
        <div className="col ">
          <label>
            <h2> Search your food</h2>
          </label>
          <div className="input-group mt-1">
            <input
              id="inputSearchFood"
              type="text"
              value={foodNew}
              list="texto_uno"
              className="form-control w-75"
              placeholder="Search your food"
              onChange={updateFoodNew}
              onKeyPress={(e) => handler(e)}
            />
            <datalist id="texto_uno">
              {foodDatabase.map((item) => (
                <option key={item.food_id}>{item.name}</option>
              ))}
            </datalist>

            <div className="input-group-append">
              <button
                className="btn btn-primary btn-lg"
                type="button"
                onClick={addFood}
              >
                Add food
              </button>
            </div>
          </div>

          <div className="col mt-3">
            <button
              className=" btn btn-success"
              type="button"
              onClick={exportPDF}
            >
              PDF Plan
            </button>
            <button
              className=" btn btn-danger ms-3 "
              type="button"
              onClick={allDelete}
            >
              All Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFood;
