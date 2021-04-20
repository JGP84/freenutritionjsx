import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import uuid from "react-uuid";
import { BsTrash, BsFiles } from "react-icons/bs";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useDietLogic from "../hooks/useDietLogic";
import {
  addColumn,
  deleteItem,
  duplicateItem,
  addRecipes,
  onDragEnd,
} from "./../functions/bodyFunctions";
/* import ComponentDraggable from "./body_components/ComponentDraggable"; */
import ModalBody from "./body_components/ModalBody";

/* Functions in Body:

*****
addFoodWeight
*****
addColumn
deleteItem
duplicateItem
launchModal
*******

*/

function Body() {
  const {
    foodDatabase,
    arrFoods,
    setArrFoods,
    columns,
    setColumns,
    setShowSnack,
  } = useContext(UserContext);

  const { addFoodWeight } = useDietLogic();

  const handleAddColumn = () => {
    addColumn(setColumns, columns, uuid, setShowSnack);
  };

  const handleAddRecipe = () => {
    addRecipes(
      foodDatabase,
      arrFoods,
      uuid,
      addFoodWeight,
      columns,
      setColumns
    );
  };

  return (
    <div>
      <button className="btn btn-outline-success m-3" onClick={handleAddColumn}>
        add Snack
      </button>

      <button className="btn btn-outline-success m-3" onClick={handleAddRecipe}>
        add example
      </button>
      <div className="container">
        {
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <DragDropContext
              onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    key={columnId}
                  >
                    <h2>{column.name}</h2>
                    <div style={{ margin: 8 }}>
                      <Droppable droppableId={columnId} key={columnId}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              style={{
                                background: snapshot.isDraggingOver
                                  ? "lightblue"
                                  : "lightgrey",
                                padding: 4,
                                width: 250,
                                minHeight: 500,
                                borderRadius: "5px",
                              }}
                            >
                              {column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.idUnique}
                                    draggableId={item.idUnique}
                                    index={index}
                                  >
                                    {/* <ComponentDraggable /> */}
                                    {(provided, snapshot) => {
                                      return (
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
                                              (ingredient) =>
                                                ingredient.idUnique ===
                                                item.idUnique
                                            )),
                                            Math.round(
                                              arrFoods[index].foodWeight / 5
                                            ) * 5)
                                          }
                                        
                                          {"g"} {item.name}
                                          <img
                                            src={item.img_link}
                                            alt="foodImg"
                                            width="30%"
                                          />
                                          <BsTrash
                                            type="button"
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
                                            <ModalBody
                                              itemIdUnique={item.idUnique}
                                              columnName={column.name}
                                            />
                                          )}
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          );
                        }}
                      </Droppable>
                    </div>
                  </div>
                );
              })}
            </DragDropContext>
          </div>
        }
      </div>
    </div>
  );
}

export default Body;
