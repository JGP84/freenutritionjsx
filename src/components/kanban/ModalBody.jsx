import React, { useContext, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { UserContext } from "../../UserContext";
import { changeName, changeN_int_card } from "../../functions/kanbanFunctions";
import useDietLogic from "../../hooks/useDietLogic";

const ModalBody = ({ itemIdUnique, columnName }) => {
  const { arrFoods, kanban, setKanban } = useContext(UserContext);
  const { addFoodWeight } = useDietLogic();
  const [name, setName] = useState("");
  const [gramsInt_card, setGramsInt_card] = useState("");

  const updateFood = (e) => {
    e.preventDefault();

    changeName(itemIdUnique,
      kanban,
      arrFoods,
      setKanban,
      columnName,
      name);

    changeN_int_card(
      itemIdUnique,
      columnName,
      arrFoods,
      addFoodWeight,
      kanban,
      setKanban,
      gramsInt_card
    );
  };

  return (
    <>
      {/* <BsPencil
        type="button"
        size="24px"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        edit
      </BsPencil> */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-dark " id="exampleModal">
                Edit food
              </h4>
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
                onChange={(e) => setName(e.target.value)}
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
                data-bs-dismiss="modal"
                onClick={(e) => updateFood(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
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
