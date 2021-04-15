import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import uuid from "react-uuid";
import { BsTrash, BsFiles } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
/* import EditItem from "../components/body_components/EditItem"; */

/* Functions in Body:

*****
addFoodWeight
nintCards
addOuputsFoods
starchyFoodsIndex
nintStarchyFoods
totalHc
proteinFoodIndex
lipidsIndex
totalProtein
totalLipids
nintProtein
nintLipids
gProtIntCards
gLipIntCards
gHcIntCards
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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

/* import { addFoodWeight } from "../functions"; */

function Body() {
  /*   useEffect(() => {
    addFoodWeight();
  }, []); */

  const {
    foodDatabase,
    arrFoods,
    setArrFoods,
    columns,
    setColumns,
    inputProt,
    inputLip,
    inputCarb,
    setShowSnack,

    /* itemEdit,
    setItemEdit, */
  } = useContext(UserContext);

  function addFoodWeight() {
    //cambia el valor de la propiedad foodWeight

    for (let i = 0; i < nintCards().length; i++) {
      arrFoods[i].foodWeight = arrFoods[i].weight_int * addOuputsFoods()[i];
    }

    return;
  }

  function nintCards() {
    const nintCards = [];

    if (arrFoods.length < 1) {
      return [];
    } else {
      for (let i = 0; i < arrFoods.length; i++) {
        let x = arrFoods[i].n_int_card;

        nintCards.push(x);
      }

      return nintCards;
    }
  }

  function addOuputsFoods() {
    //insertamos los intercambios de starchyFoods
    const arrOuputsFoods = JSON.parse(JSON.stringify(nintCards()));

    for (let i = 0; i < nintCards().length; i++) {
      arrOuputsFoods[starchyFoodsIndex()[i]] =
        nintStarchyFoods() / starchyFoodsIndex().length;
    }

    //insertamos los intercambios de proteinFoods
    for (let i = 0; i < nintCards().length; i++) {
      arrOuputsFoods[proteinFoodIndex()[i]] =
        nintProtein() / proteinFoodIndex().length;
    }
    //insertamos los intercambios de lipidos
    for (let i = 0; i < nintCards().length; i++) {
      arrOuputsFoods[lipidsIndex()[i]] = nintLipids() / lipidsIndex().length;
    }

    return arrOuputsFoods;
  }

  function starchyFoodsIndex() {
    const indices1 = [];

    const element = "starchyFoods";

    let idx = arrFoods.map((e) => e.type).indexOf(element);
    while (idx !== -1) {
      indices1.push(idx);

      idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
    }

    return indices1;
  }

  function nintStarchyFoods() {
    return (inputCarb - totalHc()) / 14;
  }

  function totalHc() {
    const arrAdd = [];

    let x = 0;
    if (nintCards().length < 1) {
      x = 1;
    } else {
      x = nintCards().length;
    }

    for (let i = 0; i < x; i++) {
      const add = nintCards()[i] * gHcIntCards()[i];
      arrAdd.push(add);
    }

    return arrAdd.reduce((a, b) => a + b);
  }

  function proteinFoodIndex() {
    const indices2 = [];

    const element2 = "proteinFoods";

    let idx2 = arrFoods.map((e) => e.type).indexOf(element2);
    while (idx2 !== -1) {
      indices2.push(idx2);

      idx2 = arrFoods.map((e) => e.type).indexOf(element2, idx2 + 1);
    }

    return indices2;
  }

  function lipidsIndex() {
    const indices3 = [];

    const element3 = "fats";

    let idx3 = arrFoods.map((e) => e.type).indexOf(element3);
    while (idx3 !== -1) {
      indices3.push(idx3);

      idx3 = arrFoods.map((e) => e.type).indexOf(element3, idx3 + 1);
    }

    return indices3;
  }

  function totalProtein() {
    const arrAdd = [];

    const nintCards1 = JSON.parse(JSON.stringify(nintCards()));

    const indices = [];

    const element = "starchyFoods";

    let idx = arrFoods.map((e) => e.type).indexOf(element);
    while (idx !== -1) {
      indices.push(idx);

      idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
    }

    for (let i = 0; i < indices.length; i++) {
      nintCards1[indices[i]] = nintStarchyFoods() / indices.length;
    }

    let x = 0;
    if (nintCards().length < 1) {
      x = 1;
    } else {
      x = nintCards().length;
    }

    for (let i = 0; i < x; i++) {
      const add = nintCards1[i] * gProtIntCards()[i];
      arrAdd.push(add);
    }

    return arrAdd.reduce((a, b) => a + b);
  }

  function totalLipids() {
    const arrAdd = [];

    const nintCards2 = JSON.parse(JSON.stringify(nintCards()));

    const indices = [];

    const element = "starchyFoods";

    let idx = arrFoods.map((e) => e.type).indexOf(element);
    while (idx !== -1) {
      indices.push(idx);

      idx = arrFoods.map((e) => e.type).indexOf(element, idx + 1);
    }

    for (let i = 0; i < indices.length; i++) {
      nintCards2[indices[i]] = nintStarchyFoods() / indices.length;
    }
    //calculo lo mismo para los indices proteinas
    const indices1 = [];

    const element1 = "proteinFoods";

    let idx1 = arrFoods.map((e) => e.type).indexOf(element1);
    while (idx1 !== -1) {
      indices1.push(idx1);

      idx1 = arrFoods.map((e) => e.type).indexOf(element1, idx1 + 1);
    }

    for (let i = 0; i < indices.length; i++) {
      nintCards2[indices1[i]] = nintProtein() / indices1.length;
    }

    let x = 0;
    if (nintCards().length < 1) {
      x = 1;
    } else {
      x = nintCards().length;
    }

    for (let i = 0; i < x; i++) {
      const add = nintCards2[i] * gLipIntCards()[i];
      arrAdd.push(add);
    }

    return arrAdd.reduce((a, b) => a + b);
  }

  function nintProtein() {
    return (inputProt - totalProtein()) / 7;
  }

  function nintLipids() {
    return (inputLip - totalLipids()) / 5;
  }

  function gProtIntCards() {
    const gProtIntCards = [];

    if (arrFoods.length < 1) {
      return [];
    } else {
      for (let i = 0; i < arrFoods.length; i++) {
        let x = arrFoods[i].prot;

        gProtIntCards.push(x);
      }

      return gProtIntCards;
    }
  }

  function gLipIntCards() {
    const gLipIntCards = [];

    if (arrFoods.length < 1) {
      return [];
    } else {
      for (let i = 0; i < arrFoods.length; i++) {
        let x = arrFoods[i].lip;

        gLipIntCards.push(x);
      }

      return gLipIntCards;
    }
  }

  function gHcIntCards() {
    const gHcIntCards = [];

    if (arrFoods.length < 1) {
      return [];
    } else {
      for (let i = 0; i < arrFoods.length; i++) {
        let x = arrFoods[i].hc;

        gHcIntCards.push(x);
      }

      return gHcIntCards;
    }
  }

  const addColumn = () => {
    setColumns({
      ...columns,

      [uuid()]: {
        name: "Snack",
        items: [],
      },
    });
    setShowSnack(true);
  };

  const deleteItem = (itemIdUnique, columnId) => {
    const column = columns[columnId];

    const arrayFiltrado = arrFoods.filter(
      (item) => item.idUnique !== itemIdUnique
    );

    setArrFoods(arrayFiltrado);

    const indexSplice = arrFoods.findIndex(
      (item) => item.idUnique === itemIdUnique
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

  function duplicateItem(itemName, columnName) {
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

    /* console.log("arrFoods duplicate", arrFoods); */
  }

  const addRecipe=()=>{
      /* const arrRecipe = ["rice","chicken breast", "oil"] */

      
      /* for (let itemRecipe of arrRecipe){ */

      /* let itemRecipe = "rice" */

      const addRecipes=(itemRecipe)=>{

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

      console.log("itemRecipe", itemRecipe)
      console.log("arrFoods", arrFoods)
    }

   /*  addRecipes("rice") */
    setTimeout(addRecipes("chicken breast"), 3000) 
    /* addRecipes("chicken breast") */
    /* setTimeout(addRecipes("oil"), 3000)  */
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

  const launchModal = (itemIdUnique, columnName) => {
    setItemIdUnique(itemIdUnique);
    setColumnName(columnName);
  };

  /* functions et variables modal */

  const [itemIdUnique, setItemIdUnique] = useState("initialState");
  const [columnName, setColumnName] = useState("initialState");
  const [name, setName] = useState("");

  /* const [n_int_card, setN_int_card] = useState(""); */
  const [gramsInt_card, setGramsInt_card] = useState("");

  const updateFood = (e) => {
    e.preventDefault();

    changeName();
    changeN_int_card();
  };

  const changeName = () => {
    const indexItem = arrFoods.findIndex(
      (element) => element.idUnique === itemIdUnique
    );

    arrFoods[indexItem].name = name;
    console.log("arrFoods despues", arrFoods);

    let arrEdited = [];

    const requestColumnId = Object.entries(columns).find(
      (i) => i[1].name === columnName
    )[0];

    const column = columns[requestColumnId];

    arrEdited = [...column.items];

    /* search index item edited */
    const indexItemArrEdited = arrEdited.findIndex(
      (element) => element.idUnique === itemIdUnique
    );

    arrEdited[indexItemArrEdited].name = name;

    console.log("arrEdited", arrEdited);

    setColumns({
      ...columns,
      [requestColumnId]: {
        ...column,
        items: [...arrEdited],
      },
    });
  };

  const changeN_int_card = () => {
    const indexItem = arrFoods.findIndex(
      (element) => element.idUnique === itemIdUnique
    );

    /* conversion grams to n_int_card */
    const n_int_card = gramsInt_card / arrFoods[indexItem].weight_int;

    arrFoods[indexItem].n_int_card = n_int_card;
    console.log("arrFoods despues", arrFoods);

    addFoodWeight();

    let arrEdited = [];

    const requestColumnId = Object.entries(columns).find(
      (i) => i[1].name === columnName
    )[0];

    const column = columns[requestColumnId];

    arrEdited = [...column.items];

    /* search index item edited */
    const indexItemArrEdited = arrEdited.findIndex(
      (element) => element.idUnique === itemIdUnique
    );

    arrEdited[indexItemArrEdited].n_int_card = n_int_card;

    console.log("arrEdited", arrEdited);

    setColumns({
      ...columns,
      [requestColumnId]: {
        ...column,
        items: [...arrEdited],
      },
    });
  };
  /* end functions modal */

  return (
    <div>
      <button className="btn btn-outline-success m-3" onClick={addColumn}>
        add Snack
      </button>
      <button className="btn btn-outline-success m-3" onClick={addRecipe}>
        add Recipe
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
                                                column.name
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
                                                      updateFood(e)
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
                                                      updateFood(e)
                                                    }
                                                  >
                                                    Edit
                                                  </button>
                                                  <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={(e) =>
                                                      updateFood(e)
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
