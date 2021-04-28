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
import { addRecipe } from "../../functions/kanbanFunctions";
import { percenProt, percenLip, percenCarb } from "../../functions/functions";
import useDietLogic from "../../hooks/useDietLogic.jsx";


const SearchFood = () => {
  const {
    arrFoods,
    setArrFoods,
    recipes,
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

  const handleAddRecipe = (itemId) => {
    addRecipe(
      foodDatabase,
      arrFoods,
      uuid,
      addFoodWeight,
      kanban,
      setKanban,
      intake,
      recipes,
      itemId
    );
  };

  return (
    <>
      <div className="col p-3">
        <div className="col mt-3">
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

          <div className="col mt-3 row-drop">
            <button
              className=" btn btn-success"
              type="button"
              onClick={handleExportPDF}
            >
              PDF Plan
            </button>
            <button
              className=" btn btn-danger ms-3 mx-5 "
              type="button"
              onClick={handleAllDelete}
            >
              All Delete
            </button>

            {/* dropdown bootstrap */}
            <div class="dropdown ms-5">
              <button
                class="btn btn-warning dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Intakes
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {Object.entries(kanban)[1][1].map((item) => (
                  <li>
                    <button
                      class="dropdown-item"
                      type="button"
                      key={uuid()}
                      value={item}
                      onClick={(e) => setIntake(e.target.value)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* end dropdown bootstrap */}
            {/* dropdown bootstrap */}
            <div class="dropdown ms-3 ">
              <button
                class="btn btn-info dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Recipes
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {recipes.map((item) => (
                  <li>
                    <button
                      class="dropdown-item"
                      type="button"
                      key={uuid()}
                      value={item.title}
                      onClick={(e) => handleAddRecipe(item.id)}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* end dropdown bootstrap */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFood;
