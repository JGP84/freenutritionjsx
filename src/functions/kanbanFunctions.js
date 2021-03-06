const addColumn = (setKanban, kanban, setShowSnack) => {
  const columnTitle = "Snack";
  const columnsState = Object.entries(kanban)[0][1];

  const columnOrderState = Object.entries(kanban)[1][1];

  const newStateColumns = {
    columns: {
      ...columnsState,
      [columnTitle]: {
        name: columnTitle,
        items: [],
      },
    },
    columnOrder: [...columnOrderState, columnTitle],
  };

  setKanban(newStateColumns);

  setShowSnack(true);
};

const deleteColumn = (
  arrFoods,
  kanban,
  setKanban,
  columnName,
  addFoodWeight
) => {
  const columnTitle = columnName;
  const columnsState = Object.entries(kanban)[0][1];

  const itemsColumnDeleted = [...columnsState[columnTitle].items];
  const columnOrderState = Object.entries(kanban)[1][1];

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
    columnOrder: [...columnOrderState],
  };

  setKanban(newStateColumns);
};

const duplicateColumn = (
  kanban,
  setKanban,
  columnName,
  foodDatabase,
  arrFoods,
  uuid,
  addFoodWeight,
  intake
) => {
  const columnTitle = intake;
  const columnsState = Object.entries(kanban)[0][1];
  /////

  console.log("intake: ", intake);

  const arrItemsColumnDeleted = [...columnsState[columnName].items];
  const columnOrderState = Object.entries(kanban)[1][1];

  const arrItemsCopy = [];

  for (let itemArrColumnDeleted of arrItemsColumnDeleted) {
    let index = foodDatabase.findIndex(
      (item) => item.name === itemArrColumnDeleted.name
    );

    arrFoods.unshift({
      food_id: foodDatabase[index].food_id,
      name: itemArrColumnDeleted.name,
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

    arrItemsCopy.push(itemAdd);
  }

  const newStateColumns = {
    columns: {
      ...columnsState,
      [columnTitle]: {
        name: columnTitle,
        items: [...arrItemsCopy],
      },
    },
    columnOrder: [...columnOrderState],
  };

  setKanban(newStateColumns);
};

const editColumn = (columnName, title, kanban, setKanban) => {
  const columnsState = Object.entries(kanban)[0][1];

  const columnOrderState = Object.entries(kanban)[1][1];

  columnsState[columnName].name = title;

  columnsState[columnName] = [title];

  columnOrderState.map(function updateNameColumn() {
    const index = columnOrderState.findIndex((column) => column === columnName);
    columnOrderState[index] = title;
  });

  const newStateColumns = {
    columns: {
      ...columnsState,
    },
    columnOrder: [...columnOrderState],
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
  const columnOrderState = Object.entries(kanban)[1][1];

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
    columnOrder: [...columnOrderState],
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
  const columnOrderState = Object.entries(kanban)[1][1];

  const newStateColumns = {
    columns: {
      ...columnsState,
      [columnTitle]: {
        name: columnTitle,
        items: [...arrItems, itemAdd],
      },
    },
    columnOrder: [...columnOrderState],
  };

  setKanban(newStateColumns);
}

const addRecipe = (
  foodDatabase,
  arrFoods,
  uuid,
  addFoodWeight,
  kanban,
  setKanban,
  intake,
  recipes,
  itemId
) => {
  const arrRecipe = recipes[itemId].ingredients;

  const newArrFoods = [];

  if (intake !== undefined) {
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
    const columnTitle = intake;

    const columnsState = Object.entries(kanban)[0][1];

    const arrItems = columnsState[columnTitle].items;
    const columnOrderState = Object.entries(kanban)[1][1];

    const newStateColumns = {
      columns: {
        ...columnsState,
        [columnTitle]: {
          name: columnTitle,
          items: [...arrItems, ...newArrFoods],
        },
      },
      columnOrder: [...columnOrderState],
    };

    setKanban(newStateColumns);
  } else {
  }
};

const addExample = (
  foodDatabase,
  arrFoods,
  uuid,
  addFoodWeight,
  kanban,
  setKanban,
  intake,
  recipes
) => {
  const columnTitle = intake;
  const columnsState = Object.entries(kanban)[0][1];
  const arrItems = columnsState[columnTitle].items;
  const columnOrderState = Object.entries(kanban)[1][1];

  const arrItemsColumn0 = [];
  const arrItemsColumn1 = [];
  const arrItemsColumn2 = [];

  const arrItemsColumns = [arrItemsColumn0, arrItemsColumn1, arrItemsColumn2];

  if (intake !== undefined) {
    for (let i = 0; i < 3; i++) {
      const arrRecipe = recipes[i].ingredients;

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

        arrItemsColumns[i].push(itemAdd);
      }
    }

    const newStateColumns = {
      columns: {
        ...columnsState,
        Breakfast: {
          name: "Breakfast",
          items: [...arrItems, ...arrItemsColumn0],
        },
        Lunch: {
          name: "Lunch",
          items: [...arrItems, ...arrItemsColumn1],
        },
        Dinner: {
          name: "Dinner",
          items: [...arrItems, ...arrItemsColumn2],
        },
      },
      columnOrder: [...columnOrderState],
    };

    setKanban(newStateColumns);
  } else {
  }
};

/* functions et variables modal */

const changeName = (
  itemIdUnique,
  kanban,
  arrFoods,
  setKanban,
  columnName,
  name
) => {
  console.log("itemIdUnique", itemIdUnique);
  console.log("columnName", columnName);

  const columnTitle = columnName;
  const columnsState = Object.entries(kanban)[0][1];
  const arrItems = columnsState[columnTitle].items;
  const columnOrderState = Object.entries(kanban)[1][1];

  /* search index items arrFoods & change name */
  const indexArrFoods = arrFoods.findIndex(
    (element) => element.idUnique === itemIdUnique
  );
  arrFoods[indexArrFoods].name = name;

  /* search index items column & change name */
  const indexArrItems = arrItems.findIndex(
    (element) => element.idUnique === itemIdUnique
  );
  arrItems[indexArrItems].name = name;

  const newStateColumns = {
    columns: {
      ...columnsState,
      [columnTitle]: {
        name: columnTitle,
        items: [...arrItems],
      },
    },
    columnOrder: [...columnOrderState],
  };

  setKanban(newStateColumns);
};

const changeN_int_card = (
  itemIdUnique,
  columnName,
  arrFoods,
  addFoodWeight,
  kanban,
  setKanban,
  gramsInt_card
) => {
  const columnTitle = columnName;
  const columnsState = Object.entries(kanban)[0][1];
  const arrItems = columnsState[columnTitle].items;
  const columnOrderState = Object.entries(kanban)[1][1];

  const indexArrFoods = arrFoods.findIndex(
    (element) => element.idUnique === itemIdUnique
  );

  /* conversion grams to n_int_card */
  const n_int_card = gramsInt_card / arrFoods[indexArrFoods].weight_int;

  arrFoods[indexArrFoods].n_int_card = n_int_card;
  console.log("arrFoods despues", arrFoods);

  addFoodWeight();

  /* search index items column & change n?? Int Cards */
  const indexArrItems = arrItems.findIndex(
    (element) => element.idUnique === itemIdUnique
  );
  arrItems[indexArrItems].n_int_card = n_int_card;

  const newStateColumns = {
    columns: {
      ...columnsState,
      [columnTitle]: {
        name: columnTitle,
        items: [...arrItems],
      },
    },
    columnOrder: [...columnOrderState],
  };

  setKanban(newStateColumns);
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
  duplicateColumn,
  editColumn,
  deleteItem,
  duplicateItem,
  addRecipe,
  addExample,
  changeName,
  changeN_int_card,
  onDragEnd,
};
