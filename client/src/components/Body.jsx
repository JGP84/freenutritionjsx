import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import uuid from "react-uuid";
import { BsTrash, BsFiles } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import EditItem from "../components/body_components/EditItem";

/* import Tarjeta from "./Tarjeta"; */
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

/* import {
  addFoodWeight,
 
   addFood,
  editar,
  save,
  eliminar,
  duplicateItem,
  allDelete,
  nintCards,
  addOuputsFoods,
  starchyFoodsIndex,
  n_int_starchyFoods,
  totalHc,
  proteinFoodIndex,
  lipidsIndex,
  totalProtein,
  totalLipids,
  nintProtein,
  nintLipids,
  addProteins,
  addLipids,
  addHc,
  addKcal,
  gProtIntCards,
  gLipIntCards,
  gHcIntCards, 
} from "../functions"; */

import { addFoodWeight } from "../functions";
/* import { addFoodWeight } from "./header_components/SearchFood"; */


//componente a exportar (Body):

function Body() {
  const {
    arrFoods,
    setArrFoods,
    columns,
    setColumns,
    inputProt,
    inputLip,
    inputCarb,setShowSnack
  } = useContext(UserContext);

/*    function addFoodWeight() {
    //cambia el valor de la propiedad foodWeight

    for (let i = 0; i < nintCards().length; i++) {
      arrFoods[i].foodWeight =
        Math.round((arrFoods[i].weight_int * addOuputsFoods()[i]) / 5) * 5;
    }

    return;
  } */

  const addColumn = () => {
    setColumns({
      ...columns,

      [uuid()]: {
        name: "Snack",
        items: [],
      },
    });
    setShowSnack(true)
  };

  const deleteItem = (itemIdUnique, columnId) => {
    const column = columns[columnId];

    const arrayFiltrado = arrFoods.filter(
      (item) => item.idUnique !== itemIdUnique
    );

    setArrFoods(arrayFiltrado);

    console.log("itemIdUnique delete", itemIdUnique);

    const indexSplice = arrFoods.findIndex(
      (item) => item.idUnique == itemIdUnique
    );

    arrFoods.splice(indexSplice, 1);

    addFoodWeight();

    setColumns({
      ...columns,
      [columnId]: {
        ...column,
        items: [
          ...column.items.filter((item) => item.idUnique !== itemIdUnique),
        ],
      },
    });

   
  };

  function duplicateItem(itemName, columnName, arrFoods) {
    const indexArrFoods = arrFoods.findIndex(
      (element) => element.name === itemName
    );

    arrFoods.unshift({
      food_id: arrFoods[indexArrFoods].food_id,
      name: arrFoods[indexArrFoods].name,
      type: arrFoods[indexArrFoods].type,
      weight_int: arrFoods[indexArrFoods].weight_int,
      prot: arrFoods[indexArrFoods].prot,
      lip: arrFoods[indexArrFoods].lip,
      hc: arrFoods[indexArrFoods].hc,
      img_link: arrFoods[indexArrFoods].img_link,
      n_int_card: arrFoods[indexArrFoods].n_int_card,
      foodWeight: 0,
      idUnique: uuid(),
    });

    addFoodWeight(arrFoods);

    /////
    const itemAdd = {
      idUnique: arrFoods[0].idUnique,
      name: arrFoods[0].name,
      foodWeight: arrFoods[0].foodWeight,
    };

    const requestColumnId = Object.entries(columns).find(
      (i) => i[1].name === columnName
    )[0];

    const column = columns[requestColumnId];

    setColumns({
      ...columns,
      [requestColumnId]: {
        ...column,
        items: [...column.items, itemAdd],
      },
    });
    ///
  }

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <div>
      <button className="btn btn-outline-success m-3" onClick={addColumn}>
        add Snack
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
                              }}
                            >
                              {column.items.map((item, index) => {
                                /* {
                                  itemIdUnique = item.idUnique;
                                } */
                                return (
                                  <Draggable
                                    key={item.idUnique}
                                    draggableId={item.idUnique}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          className="cardItem"
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            userSelect: "none",
                                            padding: 16,
                                            margin: "0 0 8px 0",
                                            minHeight: "50px",
                                            backgroundColor: snapshot.isDragging
                                              ? "#263B4A"
                                              : "#456C86",
                                            color: "white",
                                            ...provided.draggableProps.style,
                                          }}
                                        >
                                          {
                                            ((index = arrFoods.findIndex(
                                              (ingredient) =>
                                                ingredient.idUnique ===
                                                item.idUnique
                                            )),
                                            arrFoods[index].foodWeight)
                                          }
                                          {"g"}{" "}
                                          {
                                            /* ((index = arrFoods.findIndex(
                                              (ingredient) =>
                                                ingredient.idUnique ===
                                                item.idUnique
                                            )), */
                                            arrFoods[index].name
                                          }
                                          <img
                                            src={arrFoods[index].img_link}
                                            alt="foodImg"
                                            width="30%"
                                          />
                                          <BsTrash
                                            type="button"
                                            style={{ fontSize: 25 }}
                                            onClick={() =>
                                              deleteItem(
                                                item.idUnique,
                                                columnId
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
                                                arrFoods
                                              )
                                            }
                                          />
                                          {/* <EditItem /> */}
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

        {/* END hook KANBAN */}
      </div>
    </div>
  );
}

export default Body;
