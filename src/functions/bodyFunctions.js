const addColumn = (setColumns, columns, uuid, setShowSnack) => {
  setColumns({
    ...columns,

    [uuid()]: {
      name: "Snack",
      items: [],
    },
  });
  setShowSnack(true);
};

const deleteItem = (
  itemIdUnique,
  columnId,
  columns,
  arrFoods,
  setArrFoods,
  addFoodWeight,
  setColumns
) => {
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
      items: [...column.items.filter((item) => item.idUnique !== itemIdUnique)],
    },
  });
};

function duplicateItem(
  itemName,
  columnName,
  arrFoods,
  uuid,
  addFoodWeight,
  columns,
  setColumns
) {
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
}
/* functions et variables modal */

const updateFood = (e, changeName, changeN_int_card) => {
  e.preventDefault();

  changeName();
  changeN_int_card();
};

const changeName = (
  itemIdUnique,
  columns,
  arrFoods,
  setColumns,
  columnName,
  name
) => {
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

const changeN_int_card = (
  itemIdUnique,
  columnName,
  arrFoods,
  uuid,
  addFoodWeight,
  columns,
  setColumns,
  gramsInt_card
) => {
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

export {
  addColumn,
  deleteItem,
  duplicateItem,
  updateFood,
  changeName,
  changeN_int_card,
};
