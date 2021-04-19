import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import uuid from "react-uuid";
import { BsTrash, BsFiles } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useDietLogic from "../hooks/useDietLogic";
import {
  addColumn,
  deleteItem,
  duplicateItem,
  updateFood,
  changeName,
  changeN_int_card,
} from "./../functions/bodyFunctions";
/* import EditItem from "../components/body_components/EditItem"; */

/* Functions in Body:

*****
addFoodWeight

*****


addColumn
deleteItem
duplicateItem
launchModal

*******
functions modal:
updateFood
changeName
changeN_int_card

*/

/* import Tarjeta from "./Tarjeta"; */

/* import { addFoodWeight } from "../functions"; */

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

  const addRice = () => {
    /* const arrRecipe = ["rice","chicken breast", "oil"] */

    /* for (let itemRecipe of arrRecipe){ */

    let itemRecipe = "rice";

    let index = foodDatabase.findIndex((item) => item.name === itemRecipe);

    arrFoods.unshift({
      food_id: foodDatabase[index].food_id,
      name: itemRecipe,
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

    addFoodWeight();

    setColumns({
      ...columns,
      [requestColumnId]: {
        ...column,
        items: [...column.items, itemAdd],
      },
    });
    
  };

  const addChicken = () => {
    /* const arrRecipe = ["rice","chicken breast", "oil"] */

    /* for (let itemRecipe of arrRecipe){ */

    let itemRecipe = "chicken breast";

    let index = foodDatabase.findIndex((item) => item.name === itemRecipe);

    arrFoods.unshift({
      food_id: foodDatabase[index].food_id,
      name: itemRecipe,
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
  };

  const addOil = () => {
    /* const arrRecipe = ["rice","chicken breast", "oil"] */

    /* for (let itemRecipe of arrRecipe){ */

    let itemRecipe = "oil";

    let index = foodDatabase.findIndex((item) => item.name === itemRecipe);

    arrFoods.unshift({
      food_id: foodDatabase[index].food_id,
      name: itemRecipe,
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
  };
  const addRecipes = () => {
    addRice();
    addChicken();
    addOil();
  };

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

  const launchModal = (itemIdUnique, columnName) => {
    setItemIdUnique(itemIdUnique);
    setColumnName(columnName);
  };

  const handleAddColumn = () => {
    addColumn(setColumns, columns, uuid, setShowSnack);
  };

  /* functions et variables modal */

  const [itemIdUnique, setItemIdUnique] = useState("initialState");
  const [columnName, setColumnName] = useState("initialState");
  const [name, setName] = useState("");
  const [gramsInt_card, setGramsInt_card] = useState("");

  const handleChangeName = () => {
    changeName(itemIdUnique, columns, arrFoods, setColumns, columnName, name);
  };

  const handleChangeN_int_card = () => {
    changeN_int_card(
      itemIdUnique,
      columnName,
      arrFoods,
      uuid,
      addFoodWeight,
      columns,
      setColumns,
      gramsInt_card
    );
  };

  /* end functions modal */

  return (
    <div>
      <button className="btn btn-outline-success m-3" onClick={handleAddColumn}>
        add Snack
      </button>
      <button className="btn btn-outline-success m-3" onClick={addRice}>
        Rice
      </button>
      <button className="btn btn-outline-success m-3" onClick={addChicken}>
        Chicken breast
      </button>
      <button className="btn btn-outline-success m-3" onClick={addOil}>
        Oil
      </button>
      {/*  <button className="btn btn-outline-success m-3" onClick={addRecipes}>
        all recipes
      </button> */}
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
                                         {/*  {Math.round(item.foodWeight)} */}
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
                                          {/* <button
                                          onClick={()=>launchModal(item.idUnique)}
                                          >edit</button> */}
                                          {item.type === "starchyFoods" ? (
                                            ""
                                          ) : item.type === "fats" ? (
                                            ""
                                          ) : item.type === "proteinFoods" ? (
                                            ""
                                          ) : (
                                            <FiEdit
                                              size="28px"
                                              data-bs-toggle="modal"
                                              data-bs-target="#exampleModal"
                                              onClick={() =>
                                                launchModal(
                                                  item.idUnique,
                                                  column.name
                                                )
                                              }
                                            >
                                              edit
                                            </FiEdit>
                                          )}
                                          {/* MODAL */}
                                          {/*  <button
                                            onClick={() =>
                                              launchModal(item.name)
                                            }
                                            type="button"
                                            class="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                          >
                                            modal
                                          </button> */}
                                          <div
                                            className="modal fade"
                                            id="exampleModal"
                                            tabIndex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                          >
                                            <div className="modal-dialog">
                                              <div className="modal-content">
                                                <div className="modal-header">
                                                  <h4
                                                    className="modal-title text-dark "
                                                    id="exampleModal"
                                                  >
                                                    Edit food
                                                  </h4>
                                                  <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                    onClick={(e) =>
                                                      updateFood(
                                                        e,
                                                        changeName,
                                                        changeN_int_card
                                                      )
                                                    }
                                                  ></button>
                                                </div>
                                                <div className="modal-body">
                                                  <h5 className="d-flex justify-content-start text-dark">
                                                    Name
                                                  </h5>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={name}
                                                    onChange={(e) =>
                                                      setName(e.target.value)
                                                    }
                                                  ></input>

                                                  <h5 className="d-flex justify-content-start mt-3 text-dark">
                                                    Weight (g)
                                                  </h5>
                                                  <input
                                                    type="number"
                                                    className="form-control"
                                                    value={gramsInt_card}
                                                    onChange={(e) =>
                                                      setGramsInt_card(
                                                        e.target.value
                                                      )
                                                    }
                                                  ></input>
                                                </div>
                                                <div className="modal-footer">
                                                  <button
                                                    type="button"
                                                    className="btn btn-warning"
                                                    data-bs-dismiss="modal"
                                                    onClick={(e) =>
                                                      updateFood(
                                                        e,
                                                        handleChangeName,
                                                        handleChangeN_int_card
                                                      )
                                                    }
                                                  >
                                                    Edit
                                                  </button>
                                                  <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={(e) =>
                                                      updateFood(
                                                        e,
                                                        handleChangeName,
                                                        handleChangeN_int_card
                                                      )
                                                    }
                                                  >
                                                    Close
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* END modal */}
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
