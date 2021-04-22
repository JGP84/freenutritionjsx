import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import uuid from "react-uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useDietLogic from "../hooks/useDietLogic";
import { addColumn, addRecipe, onDragEnd } from "./../functions/bodyFunctions";
import CardItem from "./body_components/CardItem";

/* Functions in Body:

*****
addFoodWeight
*****
addColumn
deleteItem
duplicateItem
addRecipes
*******

*/

function Body() {
  const {
    foodDatabase,
    arrFoods,
    columns,
    setColumns,
    setShowSnack,
  } = useContext(UserContext);

  const { addFoodWeight } = useDietLogic();

  const handleAddColumn = () => {
    addColumn(setColumns, columns, uuid, setShowSnack);
  };

  const handleAddRecipe = () => {
    addRecipe(foodDatabase, arrFoods, uuid, addFoodWeight, columns, setColumns);
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
              {Object.entries(columns).map(([columnId, column]) => {
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
                    {/* <Draggable> */}
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
                                    {(provided, snapshot) => {
                                      return (
                                        <CardItem
                                          provided={provided}
                                          snapshot={snapshot}
                                          item={item}
                                          column={column}
                                          index={index}
                                          columnId={columnId}
                                        />
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
                      {/* </Draggable> */}
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
