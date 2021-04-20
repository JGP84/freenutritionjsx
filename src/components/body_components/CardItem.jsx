import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import uuid from "react-uuid";
import { BsTrash, BsFiles } from "react-icons/bs";
import { deleteItem, duplicateItem } from "../../functions/bodyFunctions";
import useDietLogic from "../../hooks/useDietLogic";
import ModalBody from "./ModalBody";

const CardItem = ({ provided, snapshot, item, column, index, columnId }) => {
  const { arrFoods, setArrFoods, columns, setColumns } = useContext(
    UserContext
  );

  const { addFoodWeight } = useDietLogic();

  return (
    <>
      <div
        className="cardItem"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          backgroundColor: snapshot.isDragging
            ? "#263B4A"
            : item.type === "starchyFoods"
            ? "#b65c03"
            : item.type === "fats"
            ? "rgba(255, 205, 86, 1)"
            : item.type === "proteinFoods"
            ? "rgba(255, 99, 132, 1)"
            : item.type === "fruits"
            ? "rgba(255, 159, 64, 1)"
            : item.type === "veggies"
            ? "#45866F"
            : "#456C86",

          color: "white",
          padding: 16,
          margin: "0 0 8px 0",

          ...provided.draggableProps.style,
        }}
      >
        {
          ((index = arrFoods.findIndex(
            (ingredient) => ingredient.idUnique === item.idUnique
          )),
          Math.round(arrFoods[index].foodWeight / 5) * 5)
        }
        {"g"} {item.name}
        <img src={item.img_link} alt="foodImg" width="30%" />
        <BsTrash
          type="button"
          size="24px"
          style={{ fontSize: 25 }}
          onClick={() =>
            deleteItem(
              item.idUnique,
              columnId,
              columns,
              arrFoods,
              setArrFoods,
              addFoodWeight,
              setColumns
            )
          }
        />
        <BsFiles
          type="button"
          size="24px"
          style={{ fontSize: 25 }}
          onClick={() =>
            duplicateItem(
              item.name,
              column.name,
              arrFoods,
              uuid,
              addFoodWeight,
              columns,
              setColumns
            )
          }
        />
        {item.type === "starchyFoods" ? (
          ""
        ) : item.type === "fats" ? (
          ""
        ) : item.type === "proteinFoods" ? (
          ""
        ) : (
          <ModalBody itemIdUnique={item.idUnique} columnName={column.name} />
        )}
      </div>
    </>
  );
};

export default CardItem;
