import React, { useContext, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { UserContext } from "../../UserContext";
import { changeName, changeN_int_card } from "../../functions/kanbanFunctions";
import useDietLogic from "../../hooks/useDietLogic";

const ModalBody = ({ item, columnName }) => {
  const { arrFoods, kanban, setKanban } = useContext(UserContext);

  const { addFoodWeight } = useDietLogic();

  const [name, setName] = useState(item.name);
  const [gramsInt_card, setGramsInt_card] = useState("");

  

  const updateFood = (e) => {
    e.preventDefault();

    if (name === undefined || name.length === 0) {
     

      changeName(item.idUnique, kanban, arrFoods, setKanban, columnName, name);
    } else {
      changeName(item.idUnique, kanban, arrFoods, setKanban, columnName, name);
    }


    
    if (gramsInt_card === undefined || gramsInt_card.length === 0) {
      let gramsInt_card = item.foodWeight;

      changeN_int_card(
        item.idUnique,
        columnName,
        arrFoods,
        addFoodWeight,
        kanban,
        setKanban,
        gramsInt_card
      );
    } else {
      changeN_int_card(
        item.idUnique,
        columnName,
        arrFoods,
        addFoodWeight,
        kanban,
        setKanban,
        gramsInt_card
      );
    }
  };

  /* function updateFoodNew(event) {
    event.preventDefault();
    const foodsNew = event.target.value;
    setFoodNew(foodsNew);
  } */

  return (
    <>
       {/* <!-- Button trigger modal --> */}
       <BsPencil
        type="button"
        size="24px"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Mo Bo
      </BsPencil>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Food
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={(e) => updateFood(e)}
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="d-flex justify-content-start text-dark">Name</h5>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) =>{
                   setName(e.target.value);
                }}

              ></input>

              <h5 className="d-flex justify-content-start mt-3 text-dark">
                Weight (g)
              </h5>
              <input
                type="number"
                className="form-control"
                value={gramsInt_card}
                onChange={(e) => setGramsInt_card(e.target.value)}
              ></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                onClick={(e) => updateFood(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={(e) => updateFood(e)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBody;
