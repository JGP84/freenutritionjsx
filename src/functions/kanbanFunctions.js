const addColumn = (setKanban, kanban, setShowSnack) => {
  const columnTitle = "Snack";
  const columnsState = Object.entries(kanban)[0][1];

  const newStateColumns = {
    columns: {
      ...columnsState,
      [columnTitle]: {
        name: columnTitle,
        items: [],
      },
    },
    columnOrder: ["Breakfast", "Lunch", "Dinner", columnTitle],
  };

  setKanban(newStateColumns);

  setShowSnack(true);
};

const deleteColumn = (arrFoods, kanban, setKanban, columnName, addFoodWeight) => {
  const columnTitle = columnName;
  const columnsState = Object.entries(kanban)[0][1];
  
  const itemsColumnDeleted = [...columnsState[columnTitle].items];


  const deleteItemsArrFoods = () => {
    for (let itemDeleted of itemsColumnDeleted) {
      const indexSplice = arrFoods.findIndex(
        (item) => item.idUnique === itemDeleted.idUnique
      );

      arrFoods.splice(indexSplice, 1);
    }
  };

  deleteItemsArrFoods();

  addFoodWeight();
  ////

  const newStateColumns = {
    columns: {
      ...columnsState,
      [columnTitle]: {
        name: columnTitle,
        items: [],
      },
    },
    columnOrder: ["Breakfast", "Lunch", "Dinner"],
  };

  setKanban(newStateColumns);
};

const deleteItem = (
  itemIdUnique,
  kanban,
  columnName,
  arrFoods,
  addFoodWeight,
  setKanban
) => {
  /* const arrFoodsFiltered = arrFoods.filter(
    (item) => item.idUnique !== itemIdUnique
  );
  
  setArrFoods(arrFoodsFiltered); */

  //////

  const indexSplice = arrFoods.findIndex(
    (item) => item.idUnique === itemIdUnique
  );

  arrFoods.splice(indexSplice, 1);

  addFoodWeight();
  ///////

  const columnTitle = columnName;

  const columnsState = Object.entries(kanban)[0][1];

  const arrItems = columnsState[columnTitle].items;

  const arrItemsFiltered = arrItems.filter(
    (item) => item.idUnique !== itemIdUnique
  );

  const newStateColumns = {
    columns: {
      ...columnsState,
      [columnTitle]: {
        name: columnTitle,
        items: [...arrItemsFiltered],
      },
    },
    columnOrder: ["Breakfast", "Lunch", "Dinner"],
  };

  setKanban(newStateColumns);
};

function duplicateItem(
  indexArrFoods,
  columnName,
  arrFoods,
  uuid,
  addFoodWeight,
  kanban,
  setKanban
) {
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

  const columnTitle = columnName;

  const columnsState = Object.entries(kanban)[0][1];

  const arrItems = columnsState[columnTitle].items;

  const newStateColumns = {
    columns: {
      ...columnsState,
      [columnTitle]: {
        name: columnTitle,
        items: [...arrItems, itemAdd],
      },
    },
    columnOrder: ["Breakfast", "Lunch", "Dinner"],
  };

  setKanban(newStateColumns);
}

const addRecipe = (
  foodDatabase,
  arrFoods,
  uuid,
  addFoodWeight,
  kanban,
  setKanban
) => {
  const arrRecipe = ["broccoli", "rice", "chicken breast", "oil", "apple"];

  const newArrFoods = [];

  for (let itemRecipe of arrRecipe) {
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

    const itemAdd = {
      idUnique: arrFoods[0].idUnique,
      name: arrFoods[0].name,
      foodWeight: arrFoods[0].foodWeight,
      type: arrFoods[0].type,
      img_link: arrFoods[0].img_link,
    };

    newArrFoods.push(itemAdd);
  }
  const columnTitle = "Lunch";

  const columnsState = Object.entries(kanban)[0][1];

  const arrItems = columnsState[columnTitle].items;

  const newStateColumns = {
    columns: {
      ...columnsState,
      [columnTitle]: {
        name: columnTitle,
        items: [...arrItems, ...newArrFoods],
      },
    },
    columnOrder: ["Breakfast", "Lunch", "Dinner"],
  };

  setKanban(newStateColumns);
};

/* functions et variables modal */

const changeName = (
  itemIdUnique,
  columns,
  arrFoods,
  setKanban,
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

  setKanban({
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
  setKanban,
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

  setKanban({
    ...columns,
    [requestColumnId]: {
      ...column,
      items: [...arrEdited],
    },
  });
};

const onDragEnd = (result, columns, setKanban) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setKanban({
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
    setKanban({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

export {
  addColumn,
  deleteColumn,
  deleteItem,
  duplicateItem,
  addRecipe,
  changeName,
  changeN_int_card,
  onDragEnd,
};
