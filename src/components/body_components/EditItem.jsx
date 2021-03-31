import { useState, useContext } from "react";
import { UserContext } from "../../UserContext.js"

const EditItem = () => {
  const {
    arrFoods,
    setArrFoods,
    columns,
    setColumns,
    foodDatabase,
    inputProt,
    inputLip,
    inputCarb,
    itemEdit,
  } = useContext(UserContext);

  const [name, setName] = useState("");

  /* const [weight_int, setweight_int] = useState(item.weight_int); */

  const [n_int_card, setN_int_card] = useState("");

  const updateFood = (e) => {
    e.preventDefault();

    changeName();
  };

  const changeName = () => {
    console.log("itemEdit: ", itemEdit);
    console.log("arrFoods edit", arrFoods);
    /* const column = columns[columnId]; */

    /*  const arrFoodsReverse = [...arrFoods].reverse() */

    /*  const indexItem = arrFoods.findIndex(
      (element) => element.idUnique === itemIdUnique.itemIdUnique
    );

    console.log("indexItem", indexItem);

    arrFoods[indexItem].name = name;
    arrFoods[indexItem].n_int_card = n_int_card;

    console.log("arrFoods despues", arrFoods);

    addFoodWeight();

    setColumns({ ...columns }); */
  };

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
        n_int_starchyFoods() / starchyFoodsIndex().length;
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

  function n_int_starchyFoods() {
    return (inputCarb - totalHc()) / 15.2;
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
      nintCards1[indices[i]] = n_int_starchyFoods() / indices.length;
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
      nintCards2[indices[i]] = n_int_starchyFoods() / indices.length;
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
    return (inputProt - totalProtein()) / 7.2;
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

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit
      </button>

      <div
        className="modal fade colorModal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header ">
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
                N_int_card
              </h5>
              <input
                type="number"
                className="form-control"
                value={n_int_card}
                onChange={(e) => setN_int_card(e.target.value)}
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

export default EditItem;
