import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext.js";
import uuid from "react-uuid";
import jsPDF from "jspdf";
import "jspdf-autotable";

import {
  addFood,
  allDelete,
  exportPDF,
} from "../../functions/search_food_functions";

import { percenProt, percenLip, percenCarb } from "../../functions/functions";

import useDietLogic from "../../hooks/useDietLogic.jsx";

/* Functions in SearchFood:

updateFoodNew

addFood
allDelete

*****
addFoodWeight
nintCards
addOuputsFoods
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

const SearchFood = () => {
  const {
    arrFoods,
    setArrFoods,
    kanban,
    setKanban,
    foodDatabase,
    showSnack,
    intake,
    setIntake,
  } = useContext(UserContext);

  const {
    addFoodWeight,
    addKcal,
    addProteins,
    addLipids,
    addHc,
    nintCards,
    addOuputsFoods,
  } = useDietLogic();

  const [foodNew, setFoodNew] = useState("");

  function updateFoodNew(event) {
    const foodsNew = event.target.value;
    setFoodNew(foodsNew);
  }

  //JSPDF date
  const today = new Date();

  const date =
    today.getDate() +
    " / " +
    (today.getMonth() + 1) +
    " / " +
    today.getFullYear();

  /* Functions handles */
  const handler = (event) => {
    if (event.key === "Enter") {
      addFood(
        foodDatabase,
        foodNew,
        arrFoods,
        uuid,
        addFoodWeight,
        kanban,
        setKanban,
        setFoodNew,
        intake
      );
    }
  };

  const handleAddFood = (e) => {
    addFood(
      foodDatabase,
      foodNew,
      arrFoods,
      uuid,
      addFoodWeight,
      kanban,
      setKanban,
      setFoodNew,
      intake
    );
  };

  const handleAllDelete = (e) => {
    allDelete(setArrFoods, setKanban);
  };
  const handleExportPDF = (e) => {
    exportPDF(
      kanban,
      arrFoods,
      showSnack,
      percenProt,
      addProteins,
      percenLip,
      addLipids,
      percenCarb,
      addHc,
      addKcal,
      date,
      jsPDF,
      nintCards,
      addOuputsFoods
    );
  };

  return (
    <>
      <div className="col p-3">
        {/*  */}
        <label>
          <h2> Choose your intake </h2>
        </label>
        <div className="input-group mt-1 p-2">
          <input
            id="inputChooseIntake"
            type="text"
            value={intake}
            list="listIntake"
            className="inputFoodIntake form-control w-75"
            placeholder="Choose your intake"
            onChange={(e) => setIntake(e.target.value)}
            /* onKeyPress={(e) => handler(e)} */
          />
          <datalist id="listIntake">
            {Object.entries(kanban)[1][1].map((item) => (
              <option key={uuid()}>{item}</option>
            ))}
          </datalist>
          <div className="input-group-append">
            <button
              className="btn btn-primary btn-lg"
              type="button"
              onClick={(e) => setIntake(e.target.value)}
            >
              Add Intake
            </button>
          </div>
        </div>

        {/*  */}
        <div className="col ">
          <label>
            <h2> Search your food</h2>
          </label>
          <div className="input-group m-2 ">
            <input
              id="inputSearchFood"
              type="text"
              value={foodNew}
              list="texto_uno"
              className="inputFoodIntake form-control w-75"
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
                onClick={handleAddFood}
              >
                Add food
              </button>
            </div>
          </div>

          <div className="col mt-3">
            <button
              className=" btn btn-success"
              type="button"
              onClick={handleExportPDF}
            >
              PDF Plan
            </button>
            <button
              className=" btn btn-danger ms-3 "
              type="button"
              onClick={handleAllDelete}
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
