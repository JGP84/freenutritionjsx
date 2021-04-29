import React, { useContext, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { UserContext } from "../../UserContext";
import uuid from "react-uuid";
import { changeName, changeN_int_card } from "../../functions/kanbanFunctions";
import useDietLogic from "../../hooks/useDietLogic";

const CardItemFalse = ({itemIdUnique, columnName, setEditItem }) => {
  const { arrFoods, kanban, setKanban } = useContext(UserContext);
  const { addFoodWeight } = useDietLogic();
  const [name, setName] = useState("");
  const [gramsInt_card, setGramsInt_card] = useState("");

  const updateFood = (e) => {
    e.preventDefault();

    changeName(itemIdUnique, kanban, arrFoods, setKanban, columnName, name);

   /*  changeN_int_card(
      itemIdUnique,
      columnName,
      arrFoods,
      uuid,
      addFoodWeight,
      kanban,
      setKanban,
      gramsInt_card
    );
 */
    setEditItem(true)
  };

  return (
    <>
      <input
        type="number"
        className="form-control"
        value={gramsInt_card}
        onChange={(e) => setGramsInt_card(e.target.value)}
      ></input>
      {"g"}{" "}
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button className="btn btn-success" onClick={(e) => updateFood(e)}>
        Save
      </button>
      {/* <img src={item.img_link} alt="foodImg" width="50px" /> */}
    </>
  );
};

export default CardItemFalse;
